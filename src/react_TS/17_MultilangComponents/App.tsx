import * as React from "react";
import { FunctionComponent } from "react";
import AttentionSection from "./components/AttentionSection";
import NewsLetterSection from "./components/NewsLetterSection";
import { Provider } from "./LangContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="wrapper">
      <Provider>
        <AttentionSection />
        <NewsLetterSection />
      </Provider>
    </div>
  );
};

export default App;
