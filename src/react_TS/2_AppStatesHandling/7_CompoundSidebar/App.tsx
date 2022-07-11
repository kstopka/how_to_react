import * as React from "react";
import { FunctionComponent } from "react";
import ItemsListView from "./components/ItemsListView";
import { Provider } from "./Context";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="wrapper">
      <Provider>
        <ItemsListView />
      </Provider>
    </div>
  );
};

export default App;
