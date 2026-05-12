import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import GithubWindow from "./components/windows/GithubWindow";
import Notes from "./components/windows/Notes";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

const App = () => {
  return <main>
    <Navbar />
    <Cli />
    <Dock />
  </main>;
};

export default App;
