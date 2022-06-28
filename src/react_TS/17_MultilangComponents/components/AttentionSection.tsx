import * as React from "react";
import { useContext, FunctionComponent } from "react";
import { LangContext } from "../context/LangContext";

interface AttentionSectionProps {
    sectionName?: string;
}

const AttentionSection: FunctionComponent<AttentionSectionProps> = ({ sectionName = "attention" }) => {
    const {
        state: { counter },
        dispatch,
    } = useContext(LangContext);

    // const { title, subtitle, ctaButton } = texts[sectionName];

    return (
        <div>
            <button onClick={() => dispatch({ type: "addition" })}>+</button>
            <button onClick={() => dispatch({ type: "subtraction" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <h3>{counter}</h3>
            {/* <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button>{ctaButton}</button> */}
        </div>
    );
};

export default AttentionSection;
