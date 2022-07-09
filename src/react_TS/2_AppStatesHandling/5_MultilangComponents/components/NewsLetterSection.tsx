import * as React from "react";
import { useContext, FunctionComponent } from "react";
import { InitialStateContent } from "../App.d";
import { Context } from "../LangContext";

interface NewsLetterSectionProps {
  sectionName?: InitialStateContent;
}

const NewsLetterSection: FunctionComponent<NewsLetterSectionProps> = ({
  sectionName = "newsletter",
}) => {
  const { state, actions } = useContext(Context);
  const { title, action, ctaButton } = state[sectionName];

  return (
    <div>
      <h1>{sectionName}</h1>
      <button onClick={() => actions.setLang("pl", sectionName)}>PL</button>
      <button onClick={() => actions.setLang("en", sectionName)}>EN</button>
      <h3>{title}</h3>
      <a href={action}>
        <button>{ctaButton}</button>
      </a>
    </div>
  );
};

export default NewsLetterSection;
