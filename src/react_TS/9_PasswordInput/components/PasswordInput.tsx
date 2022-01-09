import * as React from "react";
import { FunctionComponent } from "react";
import { useFilledArrayInputsWithPassword } from "../hooks/useFilledArrayInputsWithPassword";
import SingleInput from "./SingleInput";
// import { PasswordContext } from "../context/PasswordContext";
import "../css/style.css";
import { usePassword } from "../hooks/usePassword";
import { element } from "prop-types";
// import { usePassword } from "../hooks/usePassword";

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
    // const [correctPassword, setCorrectPassword] = useState(onSuccess);
    // const { passwordState, dispatchPasswordState } = useContext(PasswordContext);

    usePassword(password);
    const inputs = password.split("").map((letter, index) => <SingleInput key={index} letter={letter} index={index} />);

    return (
        <div className="wrapper">
            <div className="password-input">{inputs}</div>
        </div>
    );
};

export default PasswordInput;
