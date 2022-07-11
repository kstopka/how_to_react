import * as React from "react";
import { FunctionComponent } from "react";
import Layout from "./components/Layout";
import { Provider } from "./LangContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="wrapper">
      <Provider>
        <Layout />
      </Provider>
    </div>
  );
};

export default App;
