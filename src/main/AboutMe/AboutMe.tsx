import React from "react";
import { Skills } from "../skills/Skills";
import { SkillType } from "../../App";
import styles from "./aboutMe.module.scss";
import { InfoListAboutMe } from "./InfoListAboutMe/InfoListAboutMe";
import { EducationList } from "./Education/EducationList";
import containerStyles from "../../common/styles/Container.module.scss";
import { Title } from "../../common/title/Title";
import myPic from "../../assets/images/about_pic_without_bg.png";

type PropsType = {
  skills: SkillType[];
};
export const AboutMe: React.FC<PropsType> = ({ skills }) => {
  const personalInfo = [
    { id: 1, field: "First Name", data: "Mykhailo" },
    { id: 2, field: "Last Name", data: "Sokolenko" },
    { id: 3, field: "Birthdate", data: "24 August 1993" },
    { id: 4, field: "Nationality", data: "Ukrainian" },
    { id: 5, field: "Experience", data: "1.5 years" },
    { id: 6, field: "Address", data: "Kyiv" },
  ];
  const otherInfo = [
    { id: 1, field: "Freelance", data: "Available" },
    {
      id: 2,
      field: "Languages",
      data: "English - fluent, Ukrainian/Russian - native",
    },
    { id: 3, field: "Phone", data: "+380 99 008 44 59" },
    { id: 4, field: "Email", data: "mihasokol1993@gmail.com" },
    { id: 5, field: "Discord", data: "MoodyFreak#8893" },
    {
      id: 6,
      field: "Linkedin",
      data: "https://www.linkedin.com/in/mykhailo-sokolenko-9514a4244/",
    },
  ];
  const education = [
    {
      id: 1,
      data: " Feb 2011 - Feb 2015",
      title: "Bachelor Degree",
      org: "Kyiv National Economic University named after Vadym Hetman",
      desc: "Field of study International Economics with English Language",
    },
    {
      id: 2,
      data: "Jan 2015 - July 2015",
      title: "Language Certificate",
      org: "NATO STANAG 6001",
      desc: "English language proficiency 2+",
    },
    {
      id: 3,
      data: "April 2022 - August 2022",
      title: "Certificate",
      org: "Web Academy",
      desc: "Front-end for beginners",
    },
  ];

  const dataForTitle = {
    first: "ABOUT",
    second: "ME",
    extra: "I design and code beautiful things, and I love what I do.",
  };
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMe__title_text}>
        <Title dataForTitle={dataForTitle} />
      </div>

      <div className={styles.aboutMe__personal_info}>
        <div className={styles.aboutMe__personal_info__bordered}>
          <div className={styles.personal_info__img__wrapper}>
            <img
              className={styles.personal_info__img}
              src={myPic}
              alt="My photo"
            />
          </div>
        </div>
        <div className={styles.personal_info__wrapper}>
          <div className={styles.personal_info__extended}>
            <InfoListAboutMe data={personalInfo} />
            <InfoListAboutMe data={otherInfo} />
          </div>
          <div className={styles.personal_info__extended__link}>
            <a
              href="https://github.com/Jgatzwow/my-portfolio-app"
              target="_blank"
            >
              {" "}
              DOWNLOAD MY CV
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${containerStyles.container} ${styles.aboutMe__container}`}
      >
        <hr style={{ margin: "30px 0 50px" }} />
        <div className={styles.personal_info__extended}>
          <EducationList data={education} />
          <Skills skills={skills} />
        </div>
      </div>
    </section>
  );
};
