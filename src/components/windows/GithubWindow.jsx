import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import GithubCard from "../GithubCard";
import "../../scss/github.scss";

const GithubWindow = () => {
  return (
    <MacWindow>
      <div className="cards">
        {githubData.map((project, idx) => {
          return <GithubCard data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default GithubWindow;
