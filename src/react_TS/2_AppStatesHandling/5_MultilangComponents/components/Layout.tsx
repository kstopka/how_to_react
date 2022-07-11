import * as React from "react";
import { useContext, FunctionComponent } from "react";
import { Context } from "../LangContext";
import AttentionSection from "./AttentionSection";
import NewsLetterSection from "./NewsLetterSection";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({}) => {
  const {
    actions: { setLang },
  } = useContext(Context);

  return (
    <div>
      <h1>Layout</h1>
      <button onClick={() => setLang("pl")}>PL</button>
      <button onClick={() => setLang("en")}>EN</button>

      <AttentionSection />
      <NewsLetterSection />
    </div>
  );
};

export default Layout;
