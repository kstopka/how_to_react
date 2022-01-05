import * as React from "react";
import { FunctionComponent } from "react";

interface SingleInputProps {
    item: string | boolean;
    index: number;
}
///forwardRef
//NOTE type text => tekst: type password => *
const SingleInput: FunctionComponent<SingleInputProps> = ({ item, index }) => {
    const checkCorrectPassword = (e: { target: any }) => {
        const { value } = e.target;
        if (item === value) {
        } else {
        }
    };

    if (!item) {
        return <input className="disabled" disabled={true} />;
    }

    return <input type="text" maxLength={1} onBlur={checkCorrectPassword} />;
};

export default SingleInput;
