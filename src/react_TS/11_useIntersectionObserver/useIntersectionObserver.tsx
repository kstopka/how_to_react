import { RefObject, useEffect, useState } from "react";

type optionsType = {
    threshold: number;
    root: null;
    rootMargin: string;
};

type useIntersectionObserverType = (elementRef: RefObject<Element>) => IntersectionObserverEntry | undefined;

// class IntersectionHandler {
//     observer = new IntersectionObserver...
//     addElement(ref){}
// }

// const instance = new IntersectionHandler()

export const useIntersectionObserver: useIntersectionObserverType = (elementRef) => {
    //referncja
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const isVisible: boolean | undefined = entry?.isIntersecting;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const currentElement: Element | null = elementRef?.current;

        if (!currentElement || isVisible) return;

        const options: optionsType = { threshold: 0, root: null, rootMargin: "0%" };

        const observer = new IntersectionObserver(updateEntry, options);
        observer.observe(currentElement);
        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, [elementRef, isVisible]);

    return entry;
};

// const Comp1 = () => {
//     const ref = useRef(null);
//     const { isVisible, addToObserve } = useIntersectionObserver();

//     useEffect(() => {
//         if (ref.current) {
//             addToObserve(ref);
//         }
//     }, [ref]);

//     return <>{isVisible}</>;
// };

// const Comp1 = () => {
//     return <></>;
// };

// const Comp1 = () => {
//     return <></>;
// };

// const Comp1 = () => {
//     return <></>;
// };
