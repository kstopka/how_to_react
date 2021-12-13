import * as React from "react";
import { FunctionComponent } from "react";
import { objPersonType } from "../App.d";

interface SinglePersonProps {
    person: objPersonType;
}

const SinglePerson: FunctionComponent<SinglePersonProps> = ({ person: { name, surname, age, sex } }) => {
    return (
        <li className="single-person">
            <h1>Imię: {name}</h1>
            <h1>Nazwisko: {surname}</h1>
            <p>Wiek: {age}</p>
            <p>Płeć: {sex}</p>
        </li>
    );
};

export default SinglePerson;
