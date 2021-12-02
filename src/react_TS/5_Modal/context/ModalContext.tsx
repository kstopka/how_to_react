import { createContext } from "react";

export const tabContext = createContext({
    activeId: "",
    handleClick: () => {},
});
