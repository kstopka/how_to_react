import * as React from "react";
import { FunctionComponent } from "react";
import Home from "./components/Home";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
