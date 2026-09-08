import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            {/* TODO(Ibesh): replace the placeholder below with your real
                experience entries. Each entry is a header block + text-block
                with bullet points — copy the structure to add more. */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Student</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Computer Science</h3>
                        <b>
                            <p>2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    I'm currently a student studying computer science, learning
                    full-stack development through coursework and hands-on
                    projects — including this portfolio website, which combines
                    a Three.js 3D scene with a fully interactive 2D desktop OS.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Building interactive web experiences with React,
                            TypeScript, and Three.js.
                        </p>
                    </li>
                    <li>
                        <p>
                            Learning backend fundamentals with Express and
                            REST APIs.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
