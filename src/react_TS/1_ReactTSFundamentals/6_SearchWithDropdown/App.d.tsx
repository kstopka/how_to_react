import React from "react";

export type SearchDataItemType = {
    name: string;
    regularPrice: number;
    salePrice: number;
};

export type PattertToFindContextType = {
    pattertToFind: RegExp;
    setPattertToFind: React.Dispatch<React.SetStateAction<RegExp>>;
};
