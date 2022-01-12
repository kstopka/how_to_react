import { useState } from "react";
import { optionsType } from "../App.d";

export const useIntersectionObserver = () => {
    // jeden observer.
    // wszystkie componenty maja miec ref do tablicy.
    const [isVisible, setIsVisible] = useState(false);

    const callbackFn = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const options: optionsType = { threshold: 0, root: null, rootMargin: "0%" };

    const addToObserve = (ref: { current: Element | null }) => {
        const observer = new IntersectionObserver(callbackFn, options);
        //unobserve
        if (ref.current) observer.observe(ref.current);
    };

    return { isVisible, addToObserve };
};
