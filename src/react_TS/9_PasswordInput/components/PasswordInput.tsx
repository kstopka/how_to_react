import * as React from "react";
import { FunctionComponent, useEffect, useRef } from "react";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";
import SingleInput from "./SingleInput";
import "../css/style.css";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    // const [correctPassword, setCorrectPassword] = useState(onSuccess);
    const filledArrayInputsWithPassword = useFilledArrayInputsWithPassword(password);
    const correctRef = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        console.log("useEffect");
        // showInputs.forEach((item) => console.log(item.props.correctRef.current));
    }, []);

    const showInputs = filledArrayInputsWithPassword.map((element: string | boolean, index: number) => (
        <SingleInput
            key={index}
            item={element}
            index={index}
            correctRef={(ref: HTMLInputElement | null) => correctRef.current.push(ref)}
        />
    ));

    return (
        <div className="wrapper">
            <div className="password-input">{showInputs}</div>
        </div>
    );
};

export default PasswordInput;
