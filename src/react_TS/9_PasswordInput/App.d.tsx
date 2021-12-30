import React from "react";

export type CheckLettersContextType = {
    checkLetters: (boolean | string)[];
    setCheckLetters: React.Dispatch<React.SetStateAction<(boolean | string)[]>>;
};
