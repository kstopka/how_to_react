import * as React from "react";
import { FunctionComponent } from "react";

interface SingleInputProps {
    item: string | boolean;
}

const SingleInput: FunctionComponent<SingleInputProps> = ({ item }) => {
    if (!item) return <input className="disabled" disabled={true} />;

    return <input type="text" />;
};

export default SingleInput;
