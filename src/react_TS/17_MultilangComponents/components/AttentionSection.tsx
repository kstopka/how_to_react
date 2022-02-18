import * as React from "react";
import { useContext, FunctionComponent } from "react";
import { LangContext } from "../context/LangContext";

interface AttentionSectionProps {
    sectionName: string;
}

const AttentionSection: FunctionComponent<AttentionSectionProps> = ({ sectionName = "attention" }) => {
    const { texts } = useContext(LangContext);

    const { title, subtitle, ctaButton } = texts[sectionName];
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button>{ctaButton}</button>
        </div>
    );
};

export default AttentionSection;
