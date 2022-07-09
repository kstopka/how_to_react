import * as React from "react";
import { FunctionComponent } from "react";

import { Provider } from "./Context";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return <div className="wrapper">{/* <Provider></Provider> */}</div>;
};

export default App;
