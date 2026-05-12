import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import GithubWindow from "./components/windows/GithubWindow";
import Notes from "./components/windows/Notes";
import Resume from "./components/windows/Resume";

const App = () => {
  return <main>
    <Navbar />
    {/* <GithubWindow /> */}
    <Notes />
    <Resume />
    <Dock />
  </main>;
};

export default App;
