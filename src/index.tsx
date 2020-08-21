// import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import appConfig from './appConfig'
// import "./index.css";

const ReactHotLoader = appConfig.env !== "production"
  ? require("react-hot-loader").AppContainer
  : ({ children }) => React.Children.only(children);


  ReactDOM.render(
    <ReactHotLoader>
      <App /> 
    </ReactHotLoader>,
    document.getElementById("root")
  )