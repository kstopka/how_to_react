import * as React from "react";
import { FunctionComponent } from "react";

interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = () => {
    return (
        <div className="loading">
            <h1>Loading...</h1>
        </div>
    );
};

export default Loading;
