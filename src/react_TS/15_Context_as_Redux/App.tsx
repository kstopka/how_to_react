import * as React from "react";
import { FunctionComponent } from "react";
import Provider from "./Provider";
import { useContextState, useContextActions, useContextActionsAndStore } from "./App.hooks";
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    // const newState = useContextState();
    const newState = useContextState(["text", "number"]);
    console.log(newState);
    // const newActions = useContextActions();
    const newAction = useContextActions(["changeText", "resetText"]);
    console.log(newAction);
    const newActionAndState = useContextActionsAndStore(["text", "number"], ["changeText", "resetText"]);
    console.log(newActionAndState.newState);
    console.log(newActionAndState.newActions);
    return (
        // <Provider>
        <div className="app"></div>
        // </Provider>
    );
};

export default App;
