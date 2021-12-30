import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { CheckLettersContext } from "../context/ChcekLettersContext";

interface SingleInputProps {
    item: string | boolean;
    index: number;
}

//NOTE type text => tekst: type password => *
const SingleInput: FunctionComponent<SingleInputProps> = ({ item, index }) => {
    const { checkLetters, setCheckLetters } = useContext(CheckLettersContext);

    const checkCorrectPassword = (e: { target: any }) => {
        const { value } = e.target;
        const changeStatusOnSingleLetter = checkLetters;
        if (item === value) {
            changeStatusOnSingleLetter[index] = true;
        } else {
            changeStatusOnSingleLetter[index] = false;
        }
        // setCheckLetters(changeStatusOnSingleLetter);
        // console.log(checkLetters);
    };
    if (!item) return <input className="disabled" disabled={true} />;

    return <input type="text" maxLength={1} onBlur={checkCorrectPassword} />;
};

export default SingleInput;
