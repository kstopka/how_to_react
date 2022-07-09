import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { validation } from "../Validator";
import { Types } from "../App.d";

const useForm = () => {
    const { state, dispatch } = useContext(DataContext);

    const handleChangeValue = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            return dispatch({ type: Types.setError, payload: { name, value: errorMessage } });
        }
        dispatch({ type: Types.setValue, payload: { name, value } });
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        alert(`send: ${state.data}`);
    };
    return { handleChangeValue, onSubmit };
};

export default useForm;
