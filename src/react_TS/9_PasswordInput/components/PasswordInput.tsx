import * as React from "react";
import { FunctionComponent } from "react";
import "../css/style.css";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const filledArrayInputsWithPassword = useFilledArrayInputsWithPassword(password);

    return (
        <div className="password-input">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" className="disabled" disabled={true} />
        </div>
    );
};

export default PasswordInput;
