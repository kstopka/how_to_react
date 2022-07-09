import * as React from "react";
import { FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";

interface SecondStepFormProps {
    renderError: any;
}

const SecondStepForm: FunctionComponent<SecondStepFormProps> = ({ renderError }) => {
    return (
        <>
            <label htmlFor="email">email@com.com</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" render={renderError} />
        </>
    );
};

export default SecondStepForm;
