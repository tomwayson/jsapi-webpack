import "@dojo/shim/Promise";

import React from "react";
import ReactDOM from "react-dom";

import Loadable from 'react-loadable';

import { Header } from "./components/header";

import "./css/main.scss";

const LoadableWebMapComponent = Loadable({
  // NOTE: this works:
  // loader: () => import("./components/test"),
  // but this:
  loader: () => import("./components/webmapview"),
  // causes the following runtime error:
  // Warning: React.createElement: type is invalid -- 
  // expected a string (for built-in components) or a class/function (for composite components) but got: undefined.
  // You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
  loading() {
    return <div>Loading...</div>
  }
});

const addDOMNode = () => {
  const appNode = document.createElement("div");
  appNode.id = "app";
  document.body.appendChild(appNode);
  return appNode;
}

/**
 * React portion of application
 */
ReactDOM.render(
  <div className="main">
    <Header appName="Webpack App"/>
    <LoadableWebMapComponent />
  </div>,
  addDOMNode()
);
