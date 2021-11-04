import * as React from "react";
import { FunctionComponent } from "react";

// W ten sposób, funkcja przekazana do React.useCallback jest memoizowana.
// To znaczy, że dopóki nie zmienią się oneProp lub anotherProp, dopóty handleClick nie będzie nową funkcją.
// React.useCallback zapamiętuje stworzoną funkcję i dzięki temu komponent SpecialButton nie przerenderuje się bez potrzeby!

interface AppProps {}

const SpecialButton = (props: any) => <button onClick={props.onClick}>TEST</button>;

const App: FunctionComponent<AppProps> = (oneProp, anotherProp) => {
    const handleClick = React.useCallback(() => {
        console.log("Clicked!", oneProp, anotherProp);
    }, [oneProp, anotherProp]);
    return (
        <div>
            <h1>useCallback</h1>
            <SpecialButton onClick={handleClick} />
        </div>
    );
};

export default App;
