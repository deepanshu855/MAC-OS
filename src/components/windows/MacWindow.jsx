import React from "react";
import { Rnd } from "react-rnd";
import "../../scss/macWindow.scss";

const MacWindow = ({
  children,
  width = "30vw",
  height = "40vh",
  windowName,
  setWindowsState,
}) => {
  return (
    <Rnd
      default={{
        height: height,
        width: width,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() => {
                setWindowsState((state) => ({
                  ...state,
                  [windowName]: false,
                }));
              }}
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>deepanshusharma -zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
