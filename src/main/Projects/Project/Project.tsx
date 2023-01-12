import React from "react";
import styles from "./Project.module.scss";

type PropsType = {
    project: string;
    img: string;
    link: string;
    tech_stack: string[];
    demoLink: string
};

export const Project: React.FC<PropsType> = ({demoLink,
                                                 project,
                                                 tech_stack,
                                                 img,
                                                 link,
                                             }) => {
    const mappedTechStack = tech_stack.map((ts) => ts + " ");
    return (
        <figure className={styles.project}>
            <img
                src={img}
                alt={"Project related picture"}
                className={styles.project__pic}
            />
            <figcaption className={styles.project__title}>
                {project}
                <p className={styles.tech__stack}>{mappedTechStack}</p>
            </figcaption>
            <div className={styles.project__link}>
                <a href={link} className={styles.link} target="_blank">View Source Code</a>
                <a href={link} className={styles.link} target="_blank">View Demo</a>
            </div>
        </figure>
    );
};
