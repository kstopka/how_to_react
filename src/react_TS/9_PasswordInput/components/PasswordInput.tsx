import * as React from "react";
import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";
import SingleInput from "./SingleInput";
import "../css/style.css";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const [correctPassword, setCorrectPassword] = useState(onSuccess);
    const filledArrayInputsWithPassword = useFilledArrayInputsWithPassword(password);
    const testingRef = useRef<HTMLInputElement | null>(null);

    const showInputs = filledArrayInputsWithPassword.map((element: string | boolean, index: number) => (
        <SingleInput key={index} item={element} testingRef={testingRef} />
    ));
    useEffect(() => {
        showInputs.forEach((item) => {
            console.log(item);
            console.log(testingRef);
        });
    }, [showInputs]);

    return (
        <div className="wrapper">
            <div className="password-input">{showInputs}</div>
        </div>
    );
};

export default PasswordInput;
