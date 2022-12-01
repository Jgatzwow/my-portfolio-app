import React from "react";
import styles from "./Skills.module.css";
import { SkillType } from "../../App";
import { Skill } from "./Skill/Skill";
import containerStyles from "../../common/styles/Container.module.css";

type PropsType = {
  skills: SkillType[];
};

export const Skills: React.FC<PropsType> = ({ skills }) => {
  const mappedSkills = skills.map((s) => {
    return (
      <Skill
        key={s.id}
        skill={s.skill}
        description={s.description}
        image={s.image}
      />
    );
  });
  return (
    <section className={styles.skills}>
      <div
        className={`${containerStyles.container} ${styles.skills__container}`}
      >
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skill__wrapper}>{mappedSkills}</div>
      </div>
    </section>
  );
};
