import * as React from "react";
import { FunctionComponent, useMemo } from "react";

interface AppProps {}

const SpecialComponent = (props: any) => <div>ok</div>;

const App: FunctionComponent<AppProps> = (oneProp, anotherProp) => {
    const options = useMemo(
        () => ({
            data: oneProp,
            data2: anotherProp,
            // …
        }),
        [oneProp, anotherProp]
    );

    return (
        <div className="wrapper">
            <h1>useMemo</h1>
            <SpecialComponent options={options} />
        </div>
    );
};

export default App;
