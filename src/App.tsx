import React from "react";
import { Header } from "./header/Header";
import { Home } from "./main/Home";
import { v1 } from "uuid";
import { Projects } from "./main/Projects/Projects";
import { Contacts } from "./main/Contacts/Contacts";
import { AboutMe } from "./main/AboutMe/AboutMe";
import { Route, Routes } from "react-router";

export type SkillType = {
  id: string;
  skill: string;
};

export type ProjectType = {
  id: string;
  project: string;
  img: string;
  link: string;
  demoLink: string
  tech_stack: string[];
};
const App = () => {
  const state = {
    skills: [
      {
        id: v1(),
        skill: "React",
      },
      {
        id: v1(),
        skill: "TypeScript",
      },
      {
        id: v1(),
        skill: "Redux / Redux Toolkit",
      },
      {
        id: v1(),
        skill: "JS",
      },
      {
        id: v1(),
        skill: "REST API / AXIOS / RTK QUERY",
      },
      {
        id: v1(),
        skill: "CSS / SCSS / TAILWIND (BEM)",
      },
      {
        id: v1(),
        skill: "UI KIT / STYLED COMPONENTS",
      },
      {
        id: v1(),
        skill: "Material UI / Ant Design",
      },
      {
        id: v1(),
        skill: "StoryBook / Jest",
      },
      {
        id: v1(),
        skill: "Formik / yup",
      },
      {
        id: v1(),
        skill: "React hook form",
      },
      {
        id: v1(),
        skill: "HTML",
      },
    ],
    projects: [
      {
        id: v1(),
        img: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png",
        link: "https://github.com/Jgatzwow/social-network-ts",
        demoLink: "https://github.com/Jgatzwow/social-network-ts",
        project: "Social-network",
        tech_stack: ["React", "Redux", "Typescript", "Storybook"],
      },
      {
        id: v1(),
        img: "https://assets-global.website-files.com/619cef5c40cb8925cd33ece3/621e3d842f5305af9170e4eb_619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png",
        project: "TodoList",
        link: "https://github.com/Jgatzwow/my-todo-list",
        demoLink: "https://github.com/Jgatzwow/my-todo-list",
        tech_stack: ["React", "Redux", "Typescript", "Storybook"],
      },
      {
        id: v1(),
        img: "https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?w=2000",
        project: "Calendar",
        link: "https://github.com/Jgatzwow/webAcademy_H_W/tree/main/HW-calendar",
        demoLink: "https://github.com/Jgatzwow/webAcademy_H_W/tree/main/HW-calendar",
        tech_stack: ["JS", "HTML", "CSS"],
      },
      {
        id: v1(),
        img: "https://www.expat.com/images/upload/2/3/1/5/1541668818-japan-news_item_slider-t1541668818.jpg",
        project: "Odigo Landing page",
        link: "https://github.com/Jgatzwow?tab=repositories",
        demoLink: "https://github.com/Jgatzwow?tab=repositories",
        tech_stack: ["HTML", "CSS", "JS"],
      },
      {
        id: v1(),
        img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1102117/retina_1708x683_image_0__2_-9336ebe5ced53d1fd3fd5036e2ff1fb6.png",
        project: "Portfolio",
        link: "https://github.com/Jgatzwow/my-portfolio-app",
        demoLink: "https://github.com/Jgatzwow/my-portfolio-app",
        tech_stack: ["HTML", "SCSS", "React"],
      },
      {
        id: v1(),
        img: "https://cdn-icons-png.flaticon.com/512/3291/3291667.png",
        link: "https://github.com/Jgatzwow?tab=repositories",
        demoLink: "https://github.com/Jgatzwow?tab=repositories",
        project: "Github repos list",
        tech_stack: ["Typescript", "Tailwind", "React", "RTK/ RTK Query"],
      },
    ],
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<AboutMe skills={state.skills} />} />
          <Route
            path={"/projects"}
            element={<Projects projects={state.projects} />}
          />
          <Route path={"/contacts"} element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
