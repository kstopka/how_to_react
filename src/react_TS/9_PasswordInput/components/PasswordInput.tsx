import * as React from "react";
import { FunctionComponent, useState, useEffect, useContext } from "react";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";
import SingleInput from "./SingleInput";
import "../css/style.css";
import { CheckLettersContext } from "../context/ChcekLettersContext";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const [correctPassword, setCorrectPassword] = useState(onSuccess);
    const { checkLetters, setCheckLetters } = useContext(CheckLettersContext);

    const filledArrayInputsWithPassword = useFilledArrayInputsWithPassword(password);
    // const change = filledArrayInputsWithPassword.map((item) => (!item ? true : item));
    // console.log(checkLetters, change);
    // const [checkLetters, setCheckLetters] = useState(change);
    useEffect(() => {
        console.log("start");
        //TODO zmiana correctPassword
        // setCheckLetters(change);
        // console.log(checkLetters, change);
        // const checkAllCorrectLetters = checkLetters.every((item) => item === true);
        // setCorrectPassword(checkAllCorrectLetters);
        // console.log(`correctPassword: ${correctPassword}`);
    }, []);

    const showInputs = filledArrayInputsWithPassword.map((element: string | boolean, index: number) => (
        <SingleInput
            key={index}
            item={element}
            index={index}
            // setCheckLetters={setCheckLetters}
            // checkLetters={checkLetters}
        />
    ));

    return (
        <div className="wrapper">
            <div className="password-input">{showInputs}</div>
            {correctPassword ? "tak" : "nie"}
        </div>
    );
};

export default PasswordInput;

// codesandbox
