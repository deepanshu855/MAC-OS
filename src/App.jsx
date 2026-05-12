import React, { useState } from "react";
import "./scss/app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import GithubWindow from "./components/windows/GithubWindow";
import Notes from "./components/windows/Notes";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

const App = () => {
  // Now to manage opening and closing windows, we can use a state variable to keep track of which windows are open. We can create a function to toggle the visibility of each window when the corresponding icon in the dock is clicked.
  const [windowsState, setWindowsState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  }); // Initially all windows are closed

  return (
    <main>
      <Navbar />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />

      {/* Render windows based on the state. If a window's state is true, it will be rendered; otherwise, it will not be displayed. */}

      {windowsState.github && (
        <GithubWindow windowName="github" setWindowsState={setWindowsState} />
      )}
      {windowsState.notes && (
        <Notes windowName="notes" setWindowsState={setWindowsState} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.spotify && (
        <Spotify windowName="spotify" setWindowsState={setWindowsState} />
      )}
      {windowsState.cli && (
        <Cli windowName="cli" setWindowsState={setWindowsState} />
      )}
    </main>
  );
};

export default App;
