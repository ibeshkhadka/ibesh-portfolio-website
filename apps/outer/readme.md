# ibeshkhadka.com

My personal portfolio website — 3D interactive room built with Three.js + React. Originally forked from henryheffernan.com (Henry Heffernan).

Contact: <samp><a href="mailto:ibeshkhadka35@gmail.com">ibeshkhadka35@gmail.com</a></samp>

<br>

To setup a dev environment:

```bash
# Clone the repository

# Install dependencies 
npm i

# Run the local dev server
npm run dev
```

To serve a production build:

```bash
# Install dependencies if not already done - 'npm i'

# Build for production
npm run build

# Serve the build using express
npm start
```

## Customization notes

- 3D monitor iframe (`src/Application/World/MonitorScreen.ts`) still points to `https://os.henryheffernan.com/` — point it to your own inner-site deployment or fork `portfolio-inner-site`.
- Contact form (`server/index.ts`) sends to `ibeshkhadka35@gmail.com` via `FOLIO_EMAIL` / `FOLIO_PASSWORD` env vars (smtp.gmail.com).
- Preview images / favicons in `static/images/` (`preview-new.jpg`, `favicon.ico`, etc.) should be replaced with your own.
- Add your own Google Analytics ID in `src/index.html`.
