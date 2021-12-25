import * as React from "react";
import { FunctionComponent } from "react";

interface SingleInputProps {
    item: string | boolean;
    index: number;
}

//TODO jesli uzytkownik w aktywne inputy, wpisze odpowiednie hasło, wtedy wywołany zostaje prop onSuccess np. komunikat o poprawnym haśle pod inputami, w przeciwnym wypadku użytkownik ma otrzymać komunikat o nieprawidłowym haśle.
//TODO if input === max length go to next input
//NOTE type text => tekst: type password => *
const SingleInput: FunctionComponent<SingleInputProps> = ({ item, index }) => {
    console.log(index, item);
    if (!item) return <input className="disabled" disabled={true} />;

    return <input type="text" maxLength={1} />;
};

export default SingleInput;
