import * as React from "react";
import { FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";

interface FirstStepFormProps {
    renderError: any;
}

const FirstStepForm: FunctionComponent<FirstStepFormProps> = ({ renderError }) => {
    return (
        <>
            <label htmlFor="name">name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" render={renderError} />
            <label htmlFor="surname">surname</label>
            <Field type="text" name="surname" />
            <ErrorMessage name="surname" render={renderError} />
        </>
    );
};

export default FirstStepForm;
