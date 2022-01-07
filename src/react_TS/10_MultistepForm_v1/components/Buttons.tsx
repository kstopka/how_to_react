import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { Types } from "../App.d";
import { DataContext } from "../context/DataContext";
import { checkProperties } from "../Validator";

interface ButtonsProps {
    length: number;
}

const Buttons: FunctionComponent<ButtonsProps> = ({ length }) => {
    const { state, dispatch } = useContext(DataContext);
    const { visibleStep, data } = state;
    return (
        <div>
            {visibleStep ? (
                <button type="button" onClick={() => dispatch({ type: Types.subtraction })}>
                    Prev
                </button>
            ) : (
                ""
            )}
            {visibleStep === length - 1 ? (
                ""
            ) : (
                <button type="button" onClick={() => dispatch({ type: Types.addition })}>
                    Next
                </button>
            )}
            {checkProperties.all(data) ? <button type="submit">Submit</button> : ""}
        </div>
    );
};

export default Buttons;
