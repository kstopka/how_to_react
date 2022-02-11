import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLogged, setCredentials } from "../reducer/reducerStatus";
import { RootState } from "../store";
import validation from "../Validator";

const checkCredentials = (login: string, password?: string) => {
    const correctLogin = "123";
    const correctPassword = "qwe";
    if (correctLogin === login && correctPassword === password) {
        return true;
    }
    return false;
};

export const useCredentials = () => {
    const dispatch = useDispatch();
    const { login, password } = useSelector((state: RootState) => state.status);

    const changeState = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);

        dispatch(setCredentials({ name, value }));
    };
    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // Cookies.set("jankowalski@gmail.com", "admin12345@");
        const checkedCredentials = checkCredentials(login.value, password.value);
        if (!checkedCredentials) {
            console.log(`errror`);
            //TODO : return error
            return;
        }
        Cookies.set(login.value, password.value);
        dispatch(changeIsLogged());
    };

    const logout = () => {
        const cookiesNames = Cookies.get();
        const arrayCookiesNames = Object.keys(cookiesNames);
        arrayCookiesNames.forEach((item) => Cookies.remove(item));
        dispatch(changeIsLogged());
    };

    return { changeState, onSubmit, logout };
};
