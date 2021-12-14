import * as React from "react";
import Children from "./Children";

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
    return (
        <div className="content">
            <Children />
        </div>
    );
};

export default Content;
