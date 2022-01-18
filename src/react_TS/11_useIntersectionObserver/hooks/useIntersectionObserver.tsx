import { useState, useContext } from "react";
import { OptionsType } from "../App.d";
import { RefContext } from "../context/context";

const defaultOptions: OptionsType = { threshold: 0.1, root: null, rootMargin: "0%" };

class ObservedElements {
    _obs = null;
    _cb = () => null;

    constructor(options = defaultOptions) {
        this._obs = new IntersectionObserver(this.onEntry, options);
    }

    add = (element) => {
        this._obs.observe(element);
    };

    remove = (element) => {
        this._obs.unobserve(element);
    };

    addCallback = (cb) => {
        this._cb = cb;
    };

    onEntry = (entries) => {
        entries.forEach(this._cb);
    };
}

const instance = new ObservedElements();

// instance.onEntry((...)=>{})

export const useIntersectionObserver = () => {
    const { refState, refDispatch } = useContext(RefContext);

    // jeden observer.
    // wszystkie componenty maja miec ref do tablicy.
    const [isVisible, setIsVisible] = useState(false);

    const callbackFn = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        instance.addCallback(callbackFn);
    }, []);

    const options: OptionsType = { threshold: 0.1, root: null, rootMargin: "0%" };

    const addToObserve = (ref: { current: Element | null }) => {
        // const observer = new IntersectionObserver(callbackFn, options);
        // refState.refComponents.forEach((ref) => {
        // console.log(observer);
        // if (ref.current) observer.observe(ref.current);

        if (ref.current) {
            instance.add(ref.current);
        }
        return () => {
            instance.remove(ref.current);
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
