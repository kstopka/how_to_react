import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { PasswordContext } from "../context/PasswordContext";
import { ActionType } from "../App.d";

interface SingleInputProps {
    singleInputProps: {
        letter: string;
        index: number;
        showPassword: boolean;
    };
}
const SingleInput: FunctionComponent<SingleInputProps> = ({ singleInputProps }) => {
    const { letter, index, showPassword } = singleInputProps;
    const { passwordState, dispatchPasswordState } = useContext(PasswordContext);
    const { indexes } = passwordState;

    const chcekDisabledInput = indexes.findIndex((item) => item === index);

    const checkCorrectPassword = (e: { target: any }) => {
        const { value } = e.target;
        if (letter === value) {
            dispatchPasswordState({ type: ActionType.setValue, payload: { index, value } });
        } else {
            dispatchPasswordState({ type: ActionType.setValue, payload: { index, value: "" } });
        }
    };

    if (chcekDisabledInput === -1) {
        return <input className="disabled" disabled={true} />;
    }

    return <input type={showPassword ? "password" : "text"} maxLength={1} onBlur={checkCorrectPassword} />;
};

export default SingleInput;
