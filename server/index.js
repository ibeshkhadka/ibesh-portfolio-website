const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8080;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const outerDir = path.resolve(__dirname, '../apps/outer/public');
const innerDir = path.resolve(__dirname, '../apps/inner/build');

// Contact form (used by the inner OS site)
app.post('/api/send-email', (req, res) => {
    const { name, company, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.FOLIO_EMAIL,
            pass: process.env.FOLIO_PASSWORD,
        },
    });

    transporter
        .verify()
        .then(() => {
            transporter
                .sendMail({
                    from: `"${name}" <ibeshkhadka35@gmail.com>`,
                    to: 'ibeshkhadka35@gmail.com',
                    subject: `${name} <${email}> ${
                        company ? `from ${company}` : ''
                    } submitted a contact form`,
                    text: `${message}`,
                })
                .then((info) => {
                    console.log({ info });
                    res.json({ message: 'success' });
                })
                .catch((e) => {
                    console.error(e);
                    res.status(500).send(e);
                });
        })
        .catch((e) => {
            console.error(e);
            res.status(500).send(e);
        });
});

// 2D OS inner site served same-origin at /os (matches monitor iframe)
app.use('/os', express.static(innerDir));
// SPA fallback for inner client-side routes (/os/about, /os/projects, ...)
app.get('/os/*', (req, res) => {
    res.sendFile(path.join(innerDir, 'index.html'));
});

// 3D outer shell at /
app.use(express.static(outerDir));
app.get('*', (req, res) => {
    res.sendFile(path.join(outerDir, 'index.html'));
});

app.listen(port, () => {
    console.log(`ibesh-portfolio serving on port ${port}`);
    console.log(`  outer (3D): http://localhost:${port}/`);
    console.log(`  inner (OS): http://localhost:${port}/os/`);
});
