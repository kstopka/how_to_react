import * as React from "react";
import { FunctionComponent, useRef } from "react";

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

    const setter = (initialValue: any) => {
        if (!checkArray([initialValue], prevValue.current)) {
            value.current = initialValue;
            prevValue.current = [...initialValue];
        }
        return [value, setter];
    };

    return [value, setter];
};

const checkArray = (array: any[], value: any) => {
    return array.includes(value);
};

const App: FunctionComponent<AppProps> = () => {
    const [value, setter] = useMemoState({ val: 0 });
    console.log(value);

    // setter({ value: 5 });
    console.log(value);
    // setter({ value: 6 });
    console.log(value);

    return (
        <div className="wrapper">
            <p>Use Memo State Hook</p>
            {/* <div>{value}</div> */}
        </div>
    );
};

export default App;
