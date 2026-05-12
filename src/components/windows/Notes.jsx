import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import Markdown from "react-markdown";
import fetchData from "../../api/notes";
import "../../scss/notes.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Notes = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      console.log(data);
      setMarkdown(data);
    };
    getData();
  }, []);

  return (
    <MacWindow>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Notes;
