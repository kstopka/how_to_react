import * as React from "react";
import { createContext, useReducer } from "react";
// import { SearchDataType, SearchDataContextType } from "../App.d";

// export const SearchDataContext = createContext<SearchDataContextType>({
//     state: initialState,
//     dispatch: () => {},
// });

// // export const SearchDataProvider = ({ children }: { children: any }) => {
// //     const [state, dispatch] = useReducer(reducer, initialState);
// //     return <SearchDataContext.Provider value={{ state, dispatch }}>{children}</SearchDataContext.Provider>;
// // };
console.log(`ok`);

export const searchWordContext = createContext<>