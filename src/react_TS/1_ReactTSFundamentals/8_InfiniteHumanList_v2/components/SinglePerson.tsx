import * as React from "react";
import { FunctionComponent } from "react";
import { objPersonType } from "../App.d";

interface SinglePersonProps {
    person: objPersonType;
    style: any;
}

const SinglePerson: FunctionComponent<SinglePersonProps> = ({ style, person: { id, name, surname, age, sex } }) => {
    return (
        <div className="single-person" style={style}>
            {id}: {name},{surname},{sex},{age}
        </div>
    );
};

export default SinglePerson;
