import { useState, useContext } from "react";
import { OptionsType } from "../App.d";
import { RefContext } from "../context/context";

export const useIntersectionObserver = () => {
    const { refState, refDispatch } = useContext(RefContext);

    // jeden observer.
    // wszystkie componenty maja miec ref do tablicy.
    const [isVisible, setIsVisible] = useState(false);

    const callbackFn = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const options: OptionsType = { threshold: 0.1, root: null, rootMargin: "0%" };
    const addToObserve = (ref: { current: Element | null }) => {
        const observer = new IntersectionObserver(callbackFn, options);
        // refState.refComponents.forEach((ref) => {
        // console.log(observer);
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
        // });
    };
    // const addToObserve = (ref: { current: Element | null }) => {
    //     if (ref.current) observer.observe(ref.current);
    //     //unobserve
    //     return () => {
    //         if (ref.current) observer.unobserve(ref.current);
    //     };
    // };

    return { isVisible, addToObserve };
};
