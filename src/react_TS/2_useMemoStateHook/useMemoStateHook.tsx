import { isEqual, eq } from "lodash";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { FunctionComponent } from "react";
// import { useRef, useMemo } from "react";

interface AppProps {}

//rerender components
//useMemo

//co sie musi zmienic

// {value:1}

// // stnadardowe działanie
// setValue({value:2}) -> rerender komponentu
// setValue({value:1}) -> rerender komponentu

// // wymagane dzialanie
// setMemoValue({value:1}) -> nie ma rerenderu komponentu

// react hooks

// lodash

const useMemoState = (initialValue: any) => {
    const [state, setState] = useState(initialValue);
    const setter = useCallback(
        (newValue: any) => {
            const checkIsEqual = isEqual(state, newValue);
            if (!checkIsEqual) {
                console.log(`zmiana`);
                setState(newValue);
            }
        },
        [state]
    );

    return [state, setter];
};

const App: FunctionComponent<AppProps> = () => {
    const [value, setter] = useMemoState({ val: 0 });
    return (
        <div className="wrapper">
            <p>Use Memo State Hook</p>
            <button onClick={() => setter({ val: 5 })}>OK</button>
        </div>
    );
};

export default App;
