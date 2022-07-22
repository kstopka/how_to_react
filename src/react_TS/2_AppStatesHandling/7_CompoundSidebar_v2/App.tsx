import * as React from "react";
import { FunctionComponent } from "react";
import { Compound } from "./components/Compound";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="App">
      <Compound>
        <Compound.Toggler />
        <Compound.Sidebar />
      </Compound>
    </div>
  );
};

export default App;
