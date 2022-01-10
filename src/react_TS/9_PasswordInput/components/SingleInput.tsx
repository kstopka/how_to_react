import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";

interface SingleInputProps {
    letter: string;
    index: number;
}
///forwardRef
//NOTE type text => tekst: type password => *
const SingleInput: FunctionComponent<SingleInputProps> = ({ letter, index }) => {
    const { passwordState, dispatchPasswordState } = useContext(PasswordContext);
    const { indexes } = passwordState;

    const chcekDisabledInput = indexes.findIndex((item) => item === index);

    const checkCorrectPassword = (e: { target: any }) => {
        const { value } = e.target;
        if (letter === value) {
            console.log(value);
            dispatchPasswordState({ type: "setValue", index, value });
        } else {
            dispatchPasswordState({ type: "setValue", index, value: "" });
        }
    };

    if (chcekDisabledInput === -1) {
        return <input className="disabled" disabled={true} />;
    }

    return <input type="text" maxLength={1} onBlur={checkCorrectPassword} />;
};

export default SingleInput;
