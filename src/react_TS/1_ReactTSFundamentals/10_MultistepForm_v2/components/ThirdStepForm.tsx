import * as React from "react";
import { FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";

interface ThirdStepFormProps {
    renderError: any;
}

const ThirdStepForm: FunctionComponent<ThirdStepFormProps> = ({ renderError }) => {
    return (
        <>
            <label htmlFor="phonenumber">phonenumber</label>
            <Field type="number" name="phonenumber" />
            <ErrorMessage name="phonenumber" render={renderError} />
        </>
    );
};

export default ThirdStepForm;
