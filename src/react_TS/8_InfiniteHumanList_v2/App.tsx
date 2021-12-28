import * as React from "react";
import { FunctionComponent } from "react";
import MoreAndMorePeople from "./components/MoreAndMorePeople";
import { people } from "./data/people";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <MoreAndMorePeople items={people} />
        </div>
    );
};

export default App;
