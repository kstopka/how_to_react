import { createContext, useReducer } from "react";

import { refReducer, initialRefState } from "../reducer/reducer";
import { RefContextType, OptionsType } from "../App.d";

const RefContextInitial: RefContextType = {
    refState: initialRefState,
    refDispatch: () => null,
};

export const RefContext = createContext(RefContextInitial);

export const RefProvider = ({ children }: { children: any }) => {
    const [refState, refDispatch] = useReducer(refReducer, initialRefState);
    // console.log(refState);
    const options: OptionsType = { threshold: 0.1, root: null, rootMargin: "0%" };

    const callbackFn = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        console.log(entry.isIntersecting);
        // setIsVisible(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(callbackFn, options);

    refState.refComponents.forEach((ref) => {
        console.log(observer);
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    });

    return <RefContext.Provider value={{ refState, refDispatch }}>{children}</RefContext.Provider>;
};
