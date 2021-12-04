import * as React from "react";
import Children from "./Children";

interface ContentProps {}

const Content: React.FunctionComponent<ContentProps> = () => {
    //NOTE: nie klikalne białe tło = content => wyłączenie toggle na tym polu
    return (
        <div className="content">
            <Children />
        </div>
    );
};

export default Content;
