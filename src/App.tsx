import React from "react";
import "./App.css";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./main/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
        <Skills />
      </main>
    </div>
  );
}

export default App;
