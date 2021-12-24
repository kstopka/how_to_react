import * as React from "react";
import { FunctionComponent } from "react";
import "../css/style.css";

interface PasswordInputProps {
    password: string;
    onSuccess?: boolean;
}

const createArray = (number: number): number => {
    const minNsmbers = Math.ceil(number * 1.5);
    const maxNumbers = Math.ceil(number * 2);
    return Math.floor(Math.random() * (maxNumbers + 1 - minNsmbers) + minNsmbers);
};

const shuffle = (array: any[]) => {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

const PasswordInput: FunctionComponent<PasswordInputProps> = ({ password, onSuccess = false }) => {
    const passwordLength = password.length;
    const numbersInputs = createArray(passwordLength);
    const newArr: string[] = new Array(numbersInputs).fill(false).fill(true, 0, passwordLength);
    const result: string[] = password.split("");

    // const twoArrays = newArr.concat(result);
    // const newArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    // console.log(result);
    // console.log(newArr);
    // console.log(twoArrays);
    // console.log(numbersInputs);
    const resultAfterReduce = result.reduce((prev, curr, index) => {
        console.log(prev[index]);
        prev[index] = curr;
        return prev;
    }, newArr);
    // console.log(resultAfterReduce);
    // console.log(resultAfterReduce);
    // shuffle(resultAfterReduce);

    // NOTE: przypisany_index jest losowy w przedziale: minimalny 0 lub każdy kolejny, maksymalny to losowa liczba newArr.lenght - result.lenght
    // newArr[przypisany_index] = result[0];

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
