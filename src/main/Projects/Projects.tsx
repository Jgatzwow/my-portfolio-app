import React from "react";
import { ProjectType } from "../../App";
import { Project } from "./Project/Project";
import styles from "./Projects.module.css";
import containerStyles from "../../common/styles/Container.module.css";

type PropsType = {
  projects: ProjectType[];
};

export const Projects: React.FC<PropsType> = ({ projects }) => {
  const mappedProjects = projects.map((p) => {
    return (
      <Project
        key={p.id}
        project={p.project}
        description={p.description}
        tech_stack={p.tech_stack}
      />
    );
  });

  return (
    <section className={styles.projects}>
      <div
        className={`${containerStyles.container} ${styles.projects__container}`}
      >
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.projects__wrapper}>{mappedProjects}</div>
      </div>
    </section>
  );
};
