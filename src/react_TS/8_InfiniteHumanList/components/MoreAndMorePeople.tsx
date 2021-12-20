import * as React from "react";
import { FunctionComponent, useState } from "react";
import SinglePerson from "./SinglePerson";
import { objPersonType } from "../App.d";
import "../css/css.css";

interface MoreAndMorePeopleProps {
    items: objPersonType[];
}
// react visual list
const MoreAndMorePeople: FunctionComponent<MoreAndMorePeopleProps> = ({ items }) => {
    const [endIndex, setEndIndex] = useState(10);

    const showPeople = items.slice(0, endIndex).map((item, index) => (
        //index +1 do sprawdzenia: index modulo 10 === 0
        <SinglePerson key={index} person={item} index={index + 1} setEndIndex={setEndIndex} items={items} />
    ));

    return <ul className="more-and-more-people">{showPeople}</ul>;
};

export default MoreAndMorePeople;
