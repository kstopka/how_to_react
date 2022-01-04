import * as React from "react";
import { FunctionComponent, useState, useEffect } from "react";

interface SingleInputProps {
    item: string | boolean;
    index: number;
    correctRef: any;
}

//NOTE type text => tekst: type password => *
const SingleInput: FunctionComponent<SingleInputProps> = ({ item, correctRef, index }) => {
    const [correctLetter, setCorrectLetter] = useState(false);

    const checkCorrectPassword = (e: { target: any }) => {
        const { value } = e.target;
        if (item === value) {
            // correctRef.current[index] = value;
            setCorrectLetter(true);
        } else {
            setCorrectLetter(false);
        }
    };
    useEffect(() => {
        console.log("correctLetter " + correctLetter);
    }, [correctLetter]);

    if (!item) {
        return <input className="disabled" disabled={true} />;
    }

    return <input type="text" maxLength={1} onBlur={checkCorrectPassword} ref={correctRef} />;
};

export default SingleInput;
