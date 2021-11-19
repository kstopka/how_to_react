import * as React from "react";
import { useState, useEffect } from "react";
import { FunctionComponent, useRef, useMemo } from "react";

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
const useMemoState = (initialValue: any) => {
    // let value = useRef(initialValue); // zapis do pamięci
    // const prevValue = useRef()

    let value = { current: [initialValue] }; // zapis do pamięci
    const prevValue = { current: [null] };

    const setter = (newValue: any) => {
        if (!checkArray([newValue], prevValue.current)) {
            value.current = newValue;
            prevValue.current = [...newValue];
        }
        return [value, setter];
    };

    return [value, setter];
};

const useMemoStateSec = (initialValue: any) => {
    let value = initialValue;

    const setState = (newValue: any) => {
        let setStateValue = newValue;
        return [setStateValue, setState];
    };
    return [value, setState];
};

const checkArray = (array: any[], value: any) => {
    return array.includes(value);
};

const App: FunctionComponent<AppProps> = () => {
    const [value, setter] = useMemoState({ val: 0 });
    const [valueSec, setterSec] = useMemoStateSec({ val: 0 });

    useEffect(() => {
        setter({ value: 5 });
    }, []);
    // setterSec({ value: 5 });
    // console.log(value);
    // console.log(valueSec);

    // setter({ value: 6 });
    // console.log(value);

    return (
        <div className="wrapper">
            <p>Use Memo State Hook</p>
            {/* <div>{value}</div> */}
        </div>
    );
};

export default App;
