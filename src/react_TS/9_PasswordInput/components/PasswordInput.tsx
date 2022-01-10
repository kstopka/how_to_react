import * as React from "react";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import SingleInput from "./SingleInput";
import { PasswordContext } from "../context/PasswordContext";
import { usePassword } from "../hooks/usePassword";
import { ActionType } from "../App.d";
import "../css/style.css";
import e from "cors";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

// function getRandomIndexesOfPassword(password) {
//     return {
//         indexes: [1, 3, 4, 6],
//         values: {
//             "1": "",
//             "3": "",
//             "4": "",
//             "6": "",
//         },
//     };
// }

// function usePassword() {
//     const [state, setState] = useState({});

//     useEffect(() => {
//         setState(getRandomIndexesOfPassword("dupa123"));
//     }, []);

//     return { state, setState };
// }

// const initialState = {
//     inputs: [1, 3, 4, 6],
//     values: {
//         "1": "d",
//         "3": "p",
//         "4": "a",
//         "6": "2",
//     },
// };

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password }) => {
    const [showPassword, setShowPassword] = useState(true);
    const { passwordState, dispatchPasswordState } = useContext(PasswordContext);
    const { indexes, values, onSuccess } = passwordState;

    usePassword(password);

    const splitedPassword: string[] = password.split("");
    const inputs = splitedPassword.map((letter, index) => {
        const singleInputProps = {
            letter,
            index,
            showPassword,
        };
        return <SingleInput key={index} singleInputProps={singleInputProps} />;
    });
    // const handleClick = () => {
    //     setShowPassword();
    // };

    useEffect(() => {
        const checkIndexes = !indexes.some((item) => values[item] === "");
        if (!checkIndexes) {
            const isSuccess = indexes.every((item) => splitedPassword[item] === values[item]);
            dispatchPasswordState({ type: ActionType.setOnSuccess, payload: { onSuccess: isSuccess } });
        }
    }, [values]);

    if (onSuccess)
        return (
            <div className="wrapper">
                <div className="password-input">{inputs}</div>
                <button onClick={() => setShowPassword(!showPassword)}>showPassword</button>
                <p>Success</p>
            </div>
        );

    return (
        <div className="wrapper">
            <div className="password-input">{inputs}</div>
            <button onClick={() => setShowPassword(!showPassword)}>showPassword</button>
        </div>
    );
};

export default PasswordInput;
