import React from "react";
import { Skills } from "../skills/Skills";
import { SkillType } from "../../App";
import styles from "./aboutMe.module.css";
import { InfoTable } from "./InfoTable/InfoTable";

type PropsType = {
  skills: SkillType[];
};
export const AboutMe: React.FC<PropsType> = ({ skills }) => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMe__title_text}>
        <h2 className={styles.aboutMe__title}>
          ABOUT <span className={styles.aboutMe__title_yellow}>ME</span>
        </h2>
        <span className={styles.aboutMe__text}>
          I design and code beautiful things, and I love what I do.
        </span>
      </div>

      <div className={styles.aboutMe__personal_info}>
        <div className={styles.aboutMe__personal_info__bordered}>
          <div className={styles.personal_info__img__wrapper}>
            <img
              className={styles.personal_info__img}
              src="https://media.vanityfair.com/photos/570ff3254ec6412621943609/master/pass/four-avatar-sequels-james-cameron.jpg"
              alt="My photo"
            />
          </div>
        </div>
        <div className={styles.personal_info__wrapper}>
          <div className={styles.personal_info__extended}>
            <InfoTable />
            <InfoTable />
          </div>
          <div className={styles.personal_info__extended__link}>
            <a href="/"> DOWNLOAD MY CV</a>
          </div>
        </div>
      </div>
      <hr style={{ margin: "72px 0 50px" }} />
      <Skills skills={skills} />
    </section>
  );
};
