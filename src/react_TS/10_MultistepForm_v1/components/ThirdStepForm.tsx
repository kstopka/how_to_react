import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { DataContext } from "../context/DataContext";

interface ThirdStepFormProps {
    handleChangeValue: any;
}

const ThirdStepForm: FunctionComponent<ThirdStepFormProps> = ({ handleChangeValue }) => {
    const { state } = useContext(DataContext);

    const { error, errorMessage } = state.data.phonenumber;
    return (
        <div className="third-step-form">
            <label htmlFor="">
                Phonenumber:
                <input type="number" name="phonenumber" onBlur={handleChangeValue} />
                {error ? <p className="errorMSG">{errorMessage}</p> : ""}
            </label>
        </div>
    );
};

export default ThirdStepForm;
