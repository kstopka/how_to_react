import { createContext, useReducer } from "react";
import { DataContextType } from "../App.d";
import { initidalDataState, dataReducer } from "../reducer/MultistepFormReducer";

const DataContextInintial: DataContextType = {
    data: initidalDataState,
    dispatchData: () => {},
};
export const DataContext = createContext(DataContextInintial);

//TODO dokończyć context
export const DataProvider = ({ children }: { children: any }) => {
    // const [data, dispatchData] = useReducer(dataReducer, initidalDataState);
    // return <DataContext.Provider value={{ data, dispatchData }}>{children}</DataContext.Provider>;
    return <DataContext.Provider value={children}>{children}</DataContext.Provider>;
};
