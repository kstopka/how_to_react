import * as React from "react";
import { useContext, FunctionComponent } from "react";
import { InitialStateContent } from "../App.d";
import { Context } from "../LangContext";

interface AttentionSectionProps {
  sectionName?: InitialStateContent;
}

const AttentionSection: FunctionComponent<AttentionSectionProps> = ({
  sectionName = "attention",
}) => {
  const {
    state: { texts },
  } = useContext(Context);
  const { title, subtitle, ctaButton } = texts[sectionName];

  return (
    <div>
      <h1>{sectionName}</h1>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <button>{ctaButton}</button>
    </div>
  );
};

export default AttentionSection;
