import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from './App';
// import App from "./Nauka_react/1_chceckbox";
// import App from "./Nauka_react/2_shoping_cart";
// import App from "./Nauka_react/3_list_item";
// import App from "./Nauka_react/4_order_restaurant";
// import App from "./Nauka_react/5_form";
// import App from "./Nauka_react/6_exchange_counter";
import App from "./react_TS/1_rating_stars/RatingStars";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
