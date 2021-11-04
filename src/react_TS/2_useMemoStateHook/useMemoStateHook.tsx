import * as React from "react";
import { FunctionComponent, useMemo, useState } from "react";

interface AppProps {}

const App: FunctionComponent<AppProps> = (oneProp, anotherProp) => {
    const [value, setValue] = useState({ val: 0 });

    const useMemoState = useMemo(
        () => ({
            data: oneProp,
            data2: anotherProp,
            // …
        }),
        [oneProp, anotherProp]
    );

    return (
        <div className="wrapper">
            <h1>Use Memo State Hook</h1>
        </div>
    );
};

export default App;
