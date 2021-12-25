import * as React from "react";
import { FunctionComponent } from "react";
import "../css/style.css";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";
import SingleInput from "./SingleInput";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const filledArrayInputsWithPassword = useFilledArrayInputsWithPassword(password);
    console.log(filledArrayInputsWithPassword);
    //NOTE arraye różnią sie????
    const showInputs = filledArrayInputsWithPassword.map((element: string | boolean, index: number) => (
        <SingleInput key={index} item={element} index={index} />
    ));
    return <div className="password-input">{showInputs}</div>;
};

export default PasswordInput;
