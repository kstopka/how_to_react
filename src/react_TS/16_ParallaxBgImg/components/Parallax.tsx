import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import "../css/style.css";

interface ParallaxProps {
    children: any;
    bgImage: any;
}

const Parallax: FunctionComponent<ParallaxProps> = ({ children, bgImage }) => {
    // position
    const backgroundImgae = { backgroundImage: `url(${bgImage})` };
    const handleScroll = useCallback(() => {
        console.log("scrolling");
    }, []);

    return (
        <div style={backgroundImgae} className="parallax" onScroll={handleScroll}>
            {children}
        </div>
    );
};

export default Parallax;
