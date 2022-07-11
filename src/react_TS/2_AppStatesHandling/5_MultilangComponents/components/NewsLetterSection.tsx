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
  const {
    state: { texts },
  } = useContext(Context);
  const { title, action, ctaButton } = texts[sectionName];

  return (
    <div>
      <h1>{sectionName}</h1>
      <h3>{title}</h3>
      <a href={action}>
        <button>{ctaButton}</button>
      </a>
    </div>
  );
};

export default NewsLetterSection;
