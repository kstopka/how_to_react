import * as React from "react";
import { FunctionComponent, useRef, useEffect, useContext } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { RefContext } from "../context/context";

interface ComponentProps {}

const Component: FunctionComponent<ComponentProps> = () => {
    // const { refState, refDispatch } = useContext(RefContext);
    const ref = useRef(null);
    const { isVisible, addToObserve } = useIntersectionObserver();

    useEffect(() => {
        if (ref.current) {
            // console.log(ref.current);
            // refDispatch({ type: "addRef", payload: { value: ref.current } });
            addToObserve(ref.current);
            // console.log(refState.refComponents);
        }
    }, [ref.current]);

    return (
        <>
            <div className="element" ref={ref}>
                {isVisible ? "Visible" : "Not Visible"}
            </div>
        </>
    );
};

export default Component;
