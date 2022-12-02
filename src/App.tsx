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
  description: string;
};

export type ProjectType = {
  id: string;
  project: string;
  description: string;
  tech_stack: string[];
};
const App = () => {
  const state = {
    skills: [
      {
        id: v1(),
        skill: "React",
        description: "85%",
      },
      {
        id: v1(),
        skill: "JS",
        description: "60%",
      },
      {
        id: v1(),
        skill: "HTML",
        description: "90%",
      },
      {
        id: v1(),
        skill: "CSS/SCSS",
        description: "75%",
      },
      {
        id: v1(),
        skill: "TypeScript",
        description: "85%",
      },
      {
        id: v1(),
        skill: "Redux/Redux Toolkit",
        description: "85%",
      },
      {
        id: v1(),
        skill: "StoryBook",
        description: "70%",
      },
      {
        id: v1(),
        skill: "Material UI/Tailwind",
        description: "80%",
      },
      {
        id: v1(),
        skill: "RTK Query",
        description: "50%",
      },
    ],
    projects: [
      {
        id: v1(),
        project: "Social-network",
        description: "extra info about the skill",
        tech_stack: ["React", "Redux", "Typescript", "Storybook"],
      },
      {
        id: v1(),
        project: "TodoListApp",
        description: "extra info about the skill",
        tech_stack: ["React", "Redux", "Typescript", "Storybook"],
      },
      {
        id: v1(),
        project: "Tic-Tac-Toe JS",
        description: "extra info about the skill",
        tech_stack: ["JS", "HTML", "CSS"],
      },
      {
        id: v1(),
        project: "Odigo Landing page",
        description: "extra info about the skill",
        tech_stack: ["HTML", "CSS", "JS"],
      },
      {
        id: v1(),
        project: "Odigo Landing page",
        description: "extra info about the skill",
        tech_stack: ["HTML", "CSS", "JS"],
      },
      {
        id: v1(),
        project: "Odigo Landing page",
        description: "extra info about the skill",
        tech_stack: ["HTML", "CSS", "JS"],
      },
      {
        id: v1(),
        project: "Odigo Landing page",
        description: "extra info about the skill",
        tech_stack: ["HTML", "CSS", "JS"],
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
