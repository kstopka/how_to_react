import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";

import HomePage from "./HomePage";
import Login from "./Login";

interface AuthenticationProps {}

const Authentication: FunctionComponent<AuthenticationProps> = () => {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return <Login />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/">
          <HomePage />
        </Route>
      </Routes>
    </Router>
  );
};

export default Authentication;
