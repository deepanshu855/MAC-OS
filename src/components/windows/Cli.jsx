import React from "react";
import MacWindow from "./MacWindow";
import TerminalModule from "react-console-emulator";
import "../../scss/cli.scss";

const Terminal = TerminalModule.default;

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      fn: () => {
        return `
Hi, I'm Deepanshu Sharma

Full Stack Developer
B.Tech CSE Student
Building MERN + AI Projects
      `;
      },
    },

    skills: {
      description: "My technical skills",
      fn: () => {
        return `
Frontend:
- HTML
- CSS
- SCSS
- Tailwind CSS
- JavaScript
- React

Backend:
- Node.js
- Express.js
- Java

Database:
- MongoDB
- MySQL
- Prisma
      `;
      },
    },

    projects: {
      description: "View my projects",
      fn: () => {
        return `
1. Alumni Website for University
2. AI-Powered Chatbot
3. Pokemon Dictionary Website
4. MacOS Portfolio
      `;
      },
    },

    contact: {
      description: "Contact information",
      fn: () => {
        return `
Email: deepanshu@example.com
GitHub: https://github.com/deepanshu855/
LinkedIn: https://www.linkedin.com/in/deepanshu-sharma-661572323/
      `;
      },
    },

    whoami: {
      description: "Display current user",
      fn: () => {
        return "deepanshu_sharma";
      },
    },

    neofetch: {
      description: "System information",
      fn: () => {
        return `
OS: MacOS Portfolio
Host: Deepanshu Sharma
Shell: react-console-emulator
Framework: React
      `;
      },
    },

    sudo: {
      description: "Run as administrator",
      fn: () => {
        return "Permission denied 😄";
      },
    },
    date: {
      description: "Display current date and time",
      fn: () => {
        return new Date().toString();
      },
    },
    github: {
      description: "Open GitHub profile",
      fn: () => {
        window.open("https://github.com/your-github-username", "_blank");

        return "Opening GitHub...";
      },
    },
    linkedin: {
      description: "Open LinkedIn profile",
      fn: () => {
        window.open(
          "https://www.linkedin.com/in/deepanshu-sharma-661572323/",
          "_blank",
        );
        return "Opening LinkedIn...";
      },
    },
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          className="terminal"
          autoFocus={true}
          ignoreCommandCase={true}
          errorText="Oops! '[command]' does not exist"
          commands={commands}
          welcomeMessage={`Welcome to Deepanshu's MacOS Portfolio
Type "help" to see all commands.`}
          promptLabel={"deepanshusharma:~$"}
          styleEchoBack="fullInherit"
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
