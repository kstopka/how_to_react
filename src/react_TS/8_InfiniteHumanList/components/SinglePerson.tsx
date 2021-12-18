import * as React from "react";
import { FunctionComponent, useRef, useEffect } from "react";
import { objPersonType } from "../App.d";
import { fillArrayOfPeople } from "../data/people";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface SinglePersonProps {
    person: objPersonType;
    index: number;
    setEndIndex: React.Dispatch<React.SetStateAction<number>>;
    items: objPersonType[];
}

const SinglePerson: FunctionComponent<SinglePersonProps> = ({
    person: { name, surname, age, sex },
    index,
    setEndIndex,
    items,
}) => {
    const ref = useRef<HTMLLIElement | null>(null);
    const entry = useIntersectionObserver(ref);
    const isVisible = !!entry?.isIntersecting;
    const length = items.length;

    useEffect(() => {
        if (!isVisible) return;
        if (index % 10 === 0) {
            if (index === length) {
                fillArrayOfPeople(10, items);
            }
            console.log(`Render li ${index}`, { isVisible });
            setEndIndex(index + 10);
        }
    }, [index, isVisible, items, length, setEndIndex]);

    return (
        <li className="single-person" ref={ref}>
            <h1>Imię: {name}</h1>
            <h1>Nazwisko: {surname}</h1>
            <p>Wiek: {age}</p>
            <p>Płeć: {sex}</p>
        </li>
    );
};

export default SinglePerson;
