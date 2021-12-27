import * as React from "react";
import { FunctionComponent } from "react";

interface ThirdStepFormProps {
    handleChangeValue: any;
}

const ThirdStepForm: FunctionComponent<ThirdStepFormProps> = ({ handleChangeValue }) => {
    return (
        <div className="third-step-form">
            <label htmlFor="">
                Phonenumber:
                <input type="number" name="phonenumber" onBlur={handleChangeValue} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </div>
    );
};

export default ThirdStepForm;
