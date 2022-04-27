export interface LangInitialState {
    [key: string]: {
        title: string;
        subtitle: string;
        ctaButton: string;
    };
}

export type LangChangerType = (langs: string) => void;
