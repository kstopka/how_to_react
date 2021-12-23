import * as React from "react";
import { FunctionComponent } from "react";
import { objPersonType } from "../App.d";

interface SinglePersonProps {
    item: objPersonType;
}

const SinglePerson: FunctionComponent<SinglePersonProps> = ({ item: { id, name, surname, age, sex } }) => {
    return (
        <li className="single-person">
            <h1>
                {name}, {surname}, {age}, {sex}, {id}
            </h1>
        </li>
    );
};

export default SinglePerson;
