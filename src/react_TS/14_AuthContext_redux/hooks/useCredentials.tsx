import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLogged, setCredentials, setErrorMessage } from "../reducer/reducerStatus";
import { RootState } from "../store";
import validation from "../Validator";

export const useCredentials = () => {
    const dispatch = useDispatch();
    const { login, password } = useSelector((state: RootState) => state.status);
    const { usersCredentials } = useSelector((state: RootState) => state.data);

    const checkCredentials = (login: string, password: string) => {
        const isLogged = usersCredentials.some((element) => element.login === login && element.password === password);
        return isLogged;
    };

    const changeState = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            dispatch(setErrorMessage({ name, value: errorMessage }));
        }
        dispatch(setCredentials({ name, value }));
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (login.error || password.error) {
            return alert("wrong permisions");
        }
        const checkedCredentials = checkCredentials(login.value, password.value);
        if (!checkedCredentials) {
            alert("wrong permission");
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

    return { changeState, onSubmit, logout, checkCredentials };
};