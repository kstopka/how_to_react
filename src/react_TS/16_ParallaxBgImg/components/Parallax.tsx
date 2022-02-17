import * as React from "react";
import { FunctionComponent, useCallback, useEffect } from "react";
import "../css/style.css";

//https://speckyboy.com/css-javascript-parallax-scrolling/
interface ParallaxProps {
    children: any;
    bgImage: any;
}

const Parallax: FunctionComponent<ParallaxProps> = ({ children, bgImage }) => {
    // const backgroundPosition = 0;

    const backgroundImgae = { backgroundImage: `url(${bgImage})` };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // const value = window.scrollY;
            const scrollPosition = window.pageYOffset;
            const bgParallax: any = document.getElementsByClassName("parallax")[0];

            bgParallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }, []);

    return (
        <div style={backgroundImgae} className="parallax">
            {children}
        </div>
    );
};

export default Parallax;
