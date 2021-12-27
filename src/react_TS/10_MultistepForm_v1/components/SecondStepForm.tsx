import * as React from "react";
import { FunctionComponent } from "react";

interface SecondStepFormProps {
    handleChangeValue: any;
}

const SecondStepForm: FunctionComponent<SecondStepFormProps> = ({ handleChangeValue }) => {
    return (
        <div className="second-step-form">
            <label htmlFor="">
                Email:
                <input type="text" name="email" onBlur={handleChangeValue} />
            </label>
        </div>
    );
};

export default SecondStepForm;
