import React from "react";
import "../scss/dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        className="icon github"
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: !state.github }));
        }}
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>
      <div
        className="icon note"
        onClick={() => {
          setWindowsState((state) => ({ ...state, notes: !state.notes }));
        }}
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div
        className="icon pdf"
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: !state.resume }));
        }}
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div
        className="icon calender"
        onClick={() => {
          window.open("https://calendar.google.com/calendar/", "_blank");
        }}
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div
        className="icon spotify"
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: !state.spotify }));
        }}
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
      <div
        className="icon mail"
        onClick={() => {
          window.open("mailto:deepanshusharma040@gmail.com", "_blank");
        }}
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        className="icon link"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/deepanshu-sharma-661572323/",
            "_blank",
          );
        }}
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
        className="icon cli"
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: !state.cli }));
        }}
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
