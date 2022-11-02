import React from "react";
import "./App.css";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./main/skills/Skills";
import { v1 } from "uuid";
import { Projects } from "./main/Projects/Projects";
import { RemoteWork } from "./main/RemoteWork/RemoteWork";
import { Contacts } from "./main/Contacts/Contacts";
import { Footer } from "./Footer/Footer";

export type SkillType = {
  id: string;
  skill: string;
  description: string;
  image: string;
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
        description: "extra info about the skill",
        image:
          "data:image/png;base64,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",
      },
      {
        id: v1(),
        skill: "JS",
        description: "extra info about the skill",
        image:
          "https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png",
      },
      {
        id: v1(),
        skill: "HTML",
        description: "extra info about the skill",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEXp6eD////sZjDZ18rp6+PsXBzqzbzsZCzrXh/tdUj//fzrWxjrWRLsYinsYSb2vq3k5Nnp7+f62M7ucUDwimfufVP86+X1taL62s/p4NTqxbPqsJjsaTTseU3ufVTxknLrmnztbTv+9fL50MPqqY7quKL3w7PzpIv0sJvqUAD19fLroobqsprq1sjp2czqw7DvhWD75N3xl3npRwDyoIZLYQ14AAAHPklEQVR4nO3dfV+qPBgHcOWGIHkwzDQ7lU9lWZ266+79v7YbNx4GKrBrD2x8dv1zCmHu2w82ldUZDOvqzR50UvZbbbeoalD3YEe+pK5q+8VN+NYZcHD1DzdiXUPdARMhN2JNOx1GeBDyItY0091ViIWciCoL+RCVFnIhqi3kQVRcyIGoupCdqLyQmai+kJWogZCRqIOQjaiFkImoh5CFqImQgaiLEE7URggm6iOEEjUSAok6CWFErYQgol5CCFEzIYCom5CeqJ2QmqifkJaooZCSqKOQjqilkIqop5CGqKmQgqirsD1RW2Fror7CtkSNhS2JOgvbEbUWtiLqLWxD1FzYgqi7sJmovbCRqL+widgDYQOxD8J6Yi+EtURFhYMruqpZj6qqkLJsIzRC5csIjVD9MkIjVL+M0AjVLyMUIbTjOKZpgXb/ytHyhfHFavq+iNvvv3ifri7a718p+cL4I4jCyL9o24Z94Sf7B3+gROnC+I9vJeVarXvouocDwETZwvhPYKFy7to1Yt/5+AD/CUaULMyBlvfcUvjspUcEMKJcYXqKov7+bSn8zH4mwBSlCosErWjZtrfx0suJkGtRpjD+yBOMHiiOe4hYiBKFZIIPg/ZN2HZBBFyL8oTENUgFTPrIlKI0ITRB1EmSSJuiLCE8QdRLhhQlCVkSRN2EpyhHSAJvAMAyke4FnBQh2ymadhR6osoQsp6iaU9tWIoShPETe4Koq7AUxQtLCdos7yxhKQoX8rgG885CUhQt5Jcg6i2AKFhIJgibJirdpSeKFfIZRUv9pSYKFbJP9Cc6TDv1ixTyHGSIHlOmKFAoIkHUZbpJQ5wwfhaRIOozmeJHE1GY0P67LxJkniYqbds3RYpNn2gJE8arrBPuI9cEUa8Hj27241s1hChOOA3TPjif4HsO51v/dNLWw2lnwvfsQ0D3fsE9w8V9nuF7V8LBws864bqcifbCytv2mtoWOJbe5WOpa3ElEgla/l1nY+mBGAghEglawVeH82E5RX4nainBZqDg16UCUiSBQeMpOhD+3oJ7iuQp2nwNoiOECktEHpNGKcEWp+hAwnt8rinSjaLpMYKFCdHhliL1NYgOEi3kONyAgFI+L+WUIuQUHUj6zJtIEU6EJSjrvgWRIvREBSYo7d4Tc4rQBOXdP2R8GQ5OUOI9YKapPwGGsARl3sdnSJEEUiYodS0GOEUmoNT1NMCpnw0od00UaOpnBEpe11akGD60Xtf2AB5kUElem1hci20XCdsX+U/FgQClry/9YlhfCgLKXyOcL/mlzRCWYBfrvL+Cw6uT8LL1dXh5uA5dYIKdrNW/87zIWX+2H0vXTuR5UGAnv2+x+Hh6pllfOnh++qD4/Yzq4fKFiZHyV2DsmOHejvm9JyNUv4zQCNUvIzRC9csIjVD9MkIjVL+M0AjVLyM0QvXLCI1Q/TJCI1S/jNAI1S8jNEL1CyjUqUDCC50KJFz7ji7lr0HCy3zBrvLlXhqhEapeRmiE6pcRGqH6ZYRGqH7xEEYeqqO2Q7w929Wrr6xD+LvoqLXSc7nVDUKF0csY1RFwuTts3q3xvtF8XFdzbHIf0EHjn9PE6Bc9urvO/3YLfvLduZ8IF6F/i7fdV85cb463p73xNuebS2qEYwin6beBdaLcaIQfzv/CkD/BG/xTu3MT4icZsQk3ZeHw91Qq0Uv66E0PhLNTIQYzxYWjvNJmiA1V4fDf0KpWuMweVFKYjXqH2uMsZvtiU3pSFsLtcYjBrdpCsqup8BhRCI9GrmSczR/TRnjcL0I4rk5yzq5nwlFUbbB4/n4Ihy/lCcN77Z1wti895BPTTU+Ewyk5YURL4pG+CG/JsbaYKoaKvmqjE35XnybtKN7ehwxf0UW3y/9CgeWjqWIz749wjP7JJwzXQt/P+yOcX2NoNuunU4U77lLoB+Xav7II9+iK22RjTYDO2sm+S+FwVq0NizBYoX+XeNaPfvB3QafCcwUTegF6i/WNQwxwoo7XJ2GKQZbwsbyxH8K0Z9vDPv4WfX3vdiu8rdRkxiRMz8yh61ruPfpqElidCkde4JeKbSz1stEl+Sqdd5JRJxP24FVb4kpniI3j4kFnk+zdbYbchSnnx19VN/UlQxe/rvn+D1+Qh/Z7lmH2hglHODns3Ddh6U3vMuyhkPzgAr9C7Z0wa6LY0Dehu86fEbfeO2Hx4cwE79o/YX4vZhn2VJiNNdk74bPCwD0qTYTR7/ZQ2f3Ss8L762qlN9eVF1oRWsqcfb5/VnhcE0cTYaVNCqFvhLRrMaQKj95bCBU6E3w//oQQ3aE/LTw8clqIDjovRA/nQmdLLAYga7jldx2mN+iPV4eE1fVLzYfka6KOlymcaZNYHVCu/H8MM+vajFD5MkIjVL+IdUY0wuW50Vy9CpfnGTXCr5PLP5Ws4AskHN6cX5SrVkU3NYo64egx0OFEDYPHUY2iTjgcbpfrrvvfWOvlttbwP5N9NFlt1lp8AAAAAElFTkSuQmCC",
      },
      {
        id: v1(),
        skill: "CSS/SCSS",
        description: "extra info about the skill",
        image:
          "https://techblogs.42gears.com/wp-content/uploads/2022/03/Difference-Between-CSS-and-SCSS.jpg",
      },
      {
        id: v1(),
        skill: "TypeScript",
        description: "extra info about the skill",
        image:
          "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png",
      },
      {
        id: v1(),
        skill: "Redux/Redux Toolkit",
        description: "extra info about the skill",
        image:
          "https://www.freecodecamp.org/news/content/images/2022/04/reduxtoolkit.png",
      },
      {
        id: v1(),
        skill: "StoryBook",
        description: "extra info about the skill",
        image: "https://avatars.githubusercontent.com/u/22632046?s=200&v=4",
      },
      {
        id: v1(),
        skill: "Material UI",
        description: "extra info about the skill",
        image: "https://v4.mui.com/static/logo.png",
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
    ],
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <Skills skills={state.skills} />
        <Projects projects={state.projects} />
        <RemoteWork />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};
export default App;
