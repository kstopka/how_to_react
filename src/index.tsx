import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import App from "./react_TS/2_AppStatesHandling/5_MultilangComponents/App";
// import App from "./react_TS/2_AppStatesHandling/6_RouterSelectFromStore/App";
import App from "./react_TS/2_AppStatesHandling/7_CompoundSidebar/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
