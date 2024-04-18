import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "vdom" }, "hi react");
//root banaenge
const root = ReactDOM.createRoot(document.querySelector("#root")); 

//rendering the root inside html
const render = root.render(heading); 
//-------------------------------------------------------------------------------------

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head1" }, "i am h1"),
    React.createElement("h2", { id: "head2" }, "i am h2"),
  ])
);

const rootinside = ReactDOM.createRoot(document.querySelector("#root")) 
rootinside.render(parent)


