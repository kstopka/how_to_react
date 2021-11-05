import * as React from "react";
import ReactDOM from "react-dom";
import { FunctionComponent, useState } from "react";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const useMemoState = {};

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div className="wrapper">
            <h1>Use Memo State Hook</h1>
            <div>
                The first count is: {count1}
                <button onClick={() => setCount1(count1 + 1)}>+</button>
            </div>
            <div>
                The second count is: {count2}
                <button onClick={() => setCount2(count2 + 1)}>+</button>
            </div>
        </div>
    );
};

export default App;
