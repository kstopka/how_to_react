import * as React from "react";
import { FunctionComponent } from "react";

interface FirstStepFormProps {
    handleChangeValue: any;
}

const FirstStepForm: FunctionComponent<FirstStepFormProps> = ({ handleChangeValue }) => {
    return (
        <div className="first-step-form">
            <label htmlFor="">
                Name:
                <input type="text" name="name" onBlur={handleChangeValue} />
            </label>
            <label htmlFor="">
                Surname:
                <input type="text" name="surname" onBlur={handleChangeValue} />
            </label>
        </div>
    );
};

export default FirstStepForm;
