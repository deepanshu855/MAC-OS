import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import GithubWindow from "./components/windows/GithubWindow";

const App = () => {
  return <main>
    <Navbar />
    <GithubWindow />
    <Dock />
  </main>;
};

export default App;
