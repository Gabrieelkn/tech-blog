"use client";
import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("javascript", javascript);

export const HighlightCode = ({ content }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <div style={{ marginTop: "1rem" }}>{content}</div>;
};
