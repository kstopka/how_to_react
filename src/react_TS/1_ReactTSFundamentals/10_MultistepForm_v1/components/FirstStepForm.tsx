import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { DataContext } from "../context/DataContext";

interface FirstStepFormProps {}

const FirstStepForm: FunctionComponent<FirstStepFormProps> = () => {
    const { state, handleChangeValue } = useContext(DataContext);
    const { name, surname } = state.data;

    return (
        <div className="first-step-form">
            <label htmlFor="">
                Name:
                <input type="text" name="name" onBlur={handleChangeValue} />
                {name.error ? <p className="errorMSG">{name.errorMessage}</p> : ""}
            </label>

            <label htmlFor="">
                Surname:
                <input type="text" name="surname" onBlur={handleChangeValue} />
                {surname.error ? <p className="errorMSG">{surname.errorMessage}</p> : ""}
            </label>
        </div>
    );
};

export default FirstStepForm;
