import React from "react";
import {Skills} from "../skills/Skills";
import {SkillType} from "../../App";
import styles from "./aboutMe.module.scss";
import {InfoListAboutMe} from "./InfoListAboutMe/InfoListAboutMe";
import {EducationList} from "./Education/EducationList";
import containerStyles from "../../common/styles/Container.module.scss";
import {Title} from "../../common/title/Title";
import myPic from "../../assets/images/about_pic_without_bg.png";

type PropsType = {
    skills: SkillType[];
};
export const AboutMe: React.FC<PropsType> = ({skills}) => {
    const personalInfo = [
        {id: 1, field: "First Name", data: "Mykhailo"},
        {id: 2, field: "Last Name", data: "Sokolenko"},
        {id: 3, field: "Birthdate", data: "24 August 1993"},
        {id: 4, field: "Nationality", data: "Ukrainian"},
        {id: 5, field: "Experience", data: "1 year"},
        {id: 6, field: "Address", data: "Kyiv"},
    ];
    const otherInfo = [
        {id: 1, field: "Freelance", data: "Available"},
        {
            id: 2,
            field: "Languages",
            data: "English - fluent, Ukrainian/Russian - native",
        },
        {id: 3, field: "Phone", data: "+380 99 008 44 59"},
        {id: 4, field: "Email", data: "mihasokol1993@gmail.com"},
        {id: 5, field: "Telegram", data: "MichaelSokolenko"},
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

    const experience = [
        {
            id: 1,
            data: " Jan 2022 - Dec 2022",
            title: "Front-end Developer",
            org: "freelance",
            desc: "Successfully completed several landing pages jobs with great feedback from clients. " +
                "Worked on several internet shops, created user-friendly interfaces, registration and login forms " +
                "authorization flow with jwt tokens. Identified, diagnosed and fixed SPA problems, including adaptability " +
                "and performance issues"
        },
        {
            id: 2,
            data: "may 2015 - may 2021",
            title: "Financial analyst",
            org: "Government Institution",
            desc: "Managed all financial planning aspects of the institution including regional representatives. " +
                "Handled communication between central and regional offices",
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
                <Title dataForTitle={dataForTitle}/>
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
                        <InfoListAboutMe data={personalInfo}/>
                        <InfoListAboutMe data={otherInfo}/>
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
                <hr style={{margin: "30px 0 50px"}}/>
                <div className={styles.personal_info__extended}>
                    <EducationList title={'Work Experience'} data={experience}/>
                    <hr className={styles.separator} style={{margin: "30px 0 50px"}}/>
                    <EducationList title={'Education'} data={education}/>
                </div>
                <hr style={{margin: "30px 0 50px"}}/>
                <Skills skills={skills}/>
            </div>
        </section>
    );
};
