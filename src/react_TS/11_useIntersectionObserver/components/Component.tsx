import * as React from "react";
import { FunctionComponent, useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface ComponentProps {}

const Component: FunctionComponent<ComponentProps> = () => {
    const ref = useRef(null);
    const { isVisible, addToObserve } = useIntersectionObserver();

    useEffect(() => {
        if (ref.current) {
            addToObserve(ref);
        }
    }, [addToObserve, ref]);

    return (
        <>
            <div className="element" ref={ref}>
                {isVisible ? "Visible" : "Not Visible"}
            </div>
        </>
    );
};

export default Component;
