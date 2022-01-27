import { useState, useContext, useEffect } from "react";
import { OptionsType } from "../App.d";
import { RefContext } from "../context/context";

const defaultOptions: OptionsType = { threshold: 0.1, root: null, rootMargin: "0%" };

// class ObservedElements {
//     _obs = null;
//     _cb = () => null;

//     constructor(options = defaultOptions) {
//         this._obs = new IntersectionObserver(this.onEntry, options);
//     }

//     add = (element) => {
//         this._obs.observe(element);
//     };

//     remove = (element) => {
//         this._obs.unobserve(element);
//     };

//     addCallback = (cb) => {
//         this._cb = cb;
//     };

//     onEntry = (entries) => {
//         entries.forEach(this._cb);
//     };
// }

// const instance = new ObservedElements();

// instance.onEntry((...)=>{})

export const useIntersectionObserver = () => {
    const { refState, refDispatch } = useContext(RefContext);

    const [isVisible, setIsVisible] = useState(false);

    const callbackFn = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        // instance.addCallback(callbackFn);
    }, []);

    const options: OptionsType = { threshold: 0.1, root: null, rootMargin: "0%" };

    const addToObserve = (ref: { current: Element | null }) => {
        if (ref.current) {
            // instance.add(ref.current);
        }
        return () => {
            // instance.remove(ref.current);
        };
    };

    return { isVisible, addToObserve };
};
