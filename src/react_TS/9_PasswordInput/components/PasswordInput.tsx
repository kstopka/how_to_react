import * as React from "react";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import SingleInput from "./SingleInput";
import { PasswordContext } from "../context/PasswordContext";
import { usePassword } from "../hooks/usePassword";
import "../css/style.css";
import { result } from "lodash";

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

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    //correctPassword dodac do contextu
    const [correctPassword, setCorrectPassword] = useState(onSuccess);
    const { passwordState } = useContext(PasswordContext);
    const { indexes, values } = passwordState;

    usePassword(password);
    const splitedPassword: string[] = password.split("");
    const inputs = splitedPassword.map((letter, index) => <SingleInput key={index} letter={letter} index={index} />);

    useEffect(() => {
        const isSuccess = indexes.every((item) => splitedPassword[item] === values[item]);
        setCorrectPassword(isSuccess);
    }, [indexes, splitedPassword, values]);

    if (correctPassword)
        return (
            <div className="wrapper">
                <div className="password-input">{inputs}</div>
                <p>Success</p>
            </div>
        );

    return (
        <div className="wrapper">
            <div className="password-input">{inputs}</div>
        </div>
    );
};

export default PasswordInput;
