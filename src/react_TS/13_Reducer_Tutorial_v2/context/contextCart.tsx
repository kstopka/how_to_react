import { createContext, useReducer } from "react";
import { IContextInitialCart } from "../App.d";
import { initialStateCart, reducerCart } from "../reducer/reducerCart";

const ContextInitialCart: IContextInitialCart = {
    cart: initialStateCart,
    dispatchCart: () => null,
};

export const ContextCart = createContext(ContextInitialCart);

export const ProviderCart = ({ children }: { children: any }) => {
    const [cart, dispatch] = useReducer(reducerCart, initialStateCart);

    const cleanCart = ()=> {
        dispatch({...})
    }

    useEffect(()=>{
        // ...
    },[])

    // wyczyscic koszyk
    // dodac do koszyka
    // zmienic ilosc pozycji
    // usunac z koszyka
    // dodac rabat

    return <ContextCart.Provider value={{ cart, dispatch }}>{children}</ContextCart.Provider>;
};
