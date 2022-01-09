import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { DataContext } from "../context/DataContext";

interface SecondStepFormProps {
    handleChangeValue: any;
}

const SecondStepForm: FunctionComponent<SecondStepFormProps> = ({ handleChangeValue }) => {
    const { state } = useContext(DataContext);
    const { error, errorMessage } = state.data.email;
    return (
        <div className="second-step-form">
            <label htmlFor="">
                Email:
                <input type="text" name="email" onBlur={handleChangeValue} />
                {error ? <p className="errorMSG">{errorMessage}</p> : ""}
            </label>
        </div>
    );
};

export default SecondStepForm;
