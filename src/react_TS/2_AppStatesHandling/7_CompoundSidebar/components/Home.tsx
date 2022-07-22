import * as React from "react";
import { FunctionComponent } from "react";
import { useToggler } from "../hooks/useToggler";
import Sidebar from "./Sidebar";
import Toggler from "./Toggler";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { toggler, handleToggle } = useToggler();
  return (
    <div className="wrapper">
      <Toggler isOpen={toggler} handleToggle={handleToggle} />
      <Sidebar isOpen={toggler} handleToggle={handleToggle} />
    </div>
  );
};

export default Home;
