import * as React from "react";
import { FunctionComponent } from "react";

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
    let state: any = null;
    let stateInitialized: boolean = false;
    const setState = (newState: any) => {
        console.log("use set state");
        state = newState;
        return state;
    };

    if (!stateInitialized) {
        stateInitialized = true;
        state = initialValue;
    }
    return [state, setState];
};

const App: FunctionComponent<AppProps> = () => {
    const [value, setter] = useMemoState({ val: 0 });
    console.log(value);
    console.log(setter);

    setter({ value: 5 });
    console.log(value);

    return (
        <div className="wrapper">
            <h1>Use Memo State Hook</h1>
            {/* <div>{value}</div> */}
        </div>
    );
};

export default App;

// var ReactCurrentDispatcher = {
//     /**
//      * @internal
//      * @type {ReactComponent}
//      */
//     current: null,
// };

// function resolveDispatcher() {
//     var dispatcher = ReactCurrentDispatcher.current;

//     if (!(dispatcher !== null)) {
//         // eslint-disable-next-line no-lone-blocks
//         {
//             throw Error(
//                 "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
//             );
//         }
//     }

//     return dispatcher;
// }

// function useState(initialState: number) {
//     var dispatcher = resolveDispatcher();
//     return dispatcher.useState(initialState);
// }
