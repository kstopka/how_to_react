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
      <h1>{sectionName}</h1>
      <button onClick={() => actions.setLang("pl", sectionName)}>PL</button>
      <button onClick={() => actions.setLang("en", sectionName)}>EN</button>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <button>{ctaButton}</button>
    </div>
  );
};

export default AttentionSection;
