import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from './App';
// import App from "./Nauka_react/1_chceckbox";
// import App from "./Nauka_react/1_chceckbox_hooks";
// import App from "./Nauka_react/2_shoping_cart";
// import App from "./Nauka_react/2_shoping_cart_hooks";
// import App from "./Nauka_react/3_list_item";
// import App from "./Nauka_react/3_list_item_hooks";
// import App from "./Nauka_react/4_order_restaurant";
// import App from "./Nauka_react/4_order_restaurant_hooks";
// import App from "./Nauka_react/5_form";
// import App from "./Nauka_react/5_form_hooks";
// import App from "./Nauka_react/6_exchange_counter";

// import App from "./ReactHooksNauka/1_useState";
// import App from "./ReactHooksNauka/2_useEffect";
// import App from "./ReactHooksNauka/3_useReducer";
// import App from "./ReactHooksNauka/4_useCallback";

// import App from "./react_TS/1_rating_stars/RatingStars";
// import App from "./react_TS/2_useMemoStateHook/useMemoStateHook";
// import App from "./react_TS/3_authTokenReactRouter/Authentication";
// import App from "./react_TS/4_MasonryGrid/App";
// import App from "./react_TS/5_Modal/App";
import App from "./react_TS/6_SearchWithDropdown/App";

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
