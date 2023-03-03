import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Router from "./components/router";


import * as serviceWorker from "./serviceWorker";

const root = createRoot(document.getElementById("root"));

root.render(<Router />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();