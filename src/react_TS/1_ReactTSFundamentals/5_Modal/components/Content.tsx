import { FunctionComponent } from "react";
import Children from "./Children";

interface ContentProps {}

const Content: FunctionComponent<ContentProps> = () => {
    return (
        <div className="content">
            <Children />
        </div>
    );
};

export default Content;
