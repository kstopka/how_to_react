import * as React from "react";
import { createContext, useState } from "react";

import { SearchWordContextType } from "../App.d";

// export const SearchDataContext = createContext<SearchDataContextType>({
//     state: initialState,
//     dispatch: () => {},
// });

// // export const SearchDataProvider = ({ children }: { children: any }) => {
// //     const [state, dispatch] = useReducer(reducer, initialState);
// //     return <SearchDataContext.Provider value={{ state, dispatch }}>{children}</SearchDataContext.Provider>;
// // };

export const SearchWordContext = createContext<SearchWordContextType>({
    searchWord: "",
    setSearchWord: () => {},
});

export const SearchWordProvaider = ({ children }: { children: any }) => {
    const [searchWord, setSearchWord] = useState("");
    return <SearchWordContext.Provider value={{ searchWord, setSearchWord }}>{children}</SearchWordContext.Provider>;
};
