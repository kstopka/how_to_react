import * as React from "react";
import { useContext, FunctionComponent } from "react";
import { Context } from "../LangContext";

interface AttentionSectionProps {
  sectionName?: string;
}

const AttentionSection: FunctionComponent<AttentionSectionProps> = ({
  sectionName = "attention",
}) => {
  const { state, dispatch } = useContext(Context);

  // const { title, subtitle, ctaButton } = texts[sectionName];
  const { title, subtitle, ctaButton } = state.attention;

  return (
    <div>
      <button>PL</button>
      <button>EN</button>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  );
};

export default AttentionSection;
