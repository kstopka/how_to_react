import * as React from "react";
import { FunctionComponent } from "react";
import SinglePerson from "./SinglePerson";
import { objPersonType } from "../App.d";
import "../css/css.css";

interface MoreAndMorePeopleProps {
    items: objPersonType[];
}

const MoreAndMorePeople: FunctionComponent<MoreAndMorePeopleProps> = ({ items }) => {
    //TODO: jakiś setState na początek slice i koniec
    //TODO: jakieś nasłuchiwanie na widoczny element o indexie ze slica?
    //TODO: w momencie pokazania wszystkich elementów dosztukować kolejne 10???
    const showPeople = items.slice(0, 10).map((item, index) => <SinglePerson key={index} person={item} />);
    return <ul className="more-and-more-people">{showPeople}</ul>;
};

export default MoreAndMorePeople;
