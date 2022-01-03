import * as React from "react";
import { FunctionComponent, useState } from "react";

interface SingleInputProps {
    item: string | boolean;
    testingRef: any;
}

//NOTE type text => tekst: type password => *
const SingleInput: FunctionComponent<SingleInputProps> = ({ item, testingRef }) => {
    const [correctLetter, setCorrectLetter] = useState(false);

    const checkCorrectPassword = (e: { target: any }) => {
        const { value } = e.target;
        if (item === value) {
            setCorrectLetter(true);
        } else {
            setCorrectLetter(false);
            // checkLetter = false;
        }
    };
    if (!item) {
        // checkLetter = true;
        return <input className="disabled" disabled={true} ref={testingRef} />;
    }

    return <input type="text" maxLength={1} onBlur={checkCorrectPassword} ref={testingRef} />;
};

export default SingleInput;
