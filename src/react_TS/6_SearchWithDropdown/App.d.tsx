import React from "react";

export type SearchDataItemType = {
    name: string;
    regularPrice: number;
    salePrice: number;
};

export type SearchWordContextType = {
    searchWord: string;
    setSearchWord: React.Dispatch<React.SetStateAction<string>>;
};
