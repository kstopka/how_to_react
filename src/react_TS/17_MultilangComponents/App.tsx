import * as React from "react";
import { FunctionComponent } from "react";
import AttentionSection from "./components/AttentionSection";
import { ProviderLang } from "./context/LangContext";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <ProviderLang>
                <AttentionSection />
            </ProviderLang>
        </div>
    );
};

export default App;
