import * as React from "react";
import { useContext, FunctionComponent } from "react";
import { InitialStateContent } from "../App.d";
import { Context } from "../LangContext";

interface AttentionSectionProps {}

const AttentionSection: FunctionComponent<AttentionSectionProps> = ({}) => {
  const { state, actions } = useContext(Context);

  return (
    <div>
      <h1>Layout</h1>
      {/* <button onClick={() => actions.setLang("pl", sectionName)}>PL</button> */}
      {/* <button onClick={() => actions.setLang("en", sectionName)}>EN</button> */}
    </div>
  );
};

export default AttentionSection;
