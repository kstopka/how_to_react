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
  const { state, actions } = useContext(Context);

  const { title, subtitle, ctaButton } = state[sectionName];

  return (
    <div>
      <button onClick={() => actions.setLang("pl", sectionName)}>PL</button>
      <button onClick={() => actions.setLang("en", sectionName)}>EN</button>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  );
};

export default AttentionSection;
