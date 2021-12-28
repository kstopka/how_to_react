import * as React from "react";
import { FunctionComponent } from "react";
import { objPersonType } from "../App.d";

interface SinglePersonProps {
    person: objPersonType;
}

const SinglePerson: FunctionComponent<SinglePersonProps> = ({ person: { id, name, surname, age, sex } }) => {
    return (
        <li className="single-person">
            {name}, {surname}, {age}, {sex}, {id}
        </li>
    );
};

export default SinglePerson;
