import * as React from "react";
import { FunctionComponent, useState } from "react";
import "../css/style.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { MultistepFormValues } from "../App.d";
import { MultistepSchema } from "../validator";
import FirstStepFormProps from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";

interface MultistepFormProps {}

const renderError = (message: string) => <p className="error-message">{message}</p>;

const showStep = [
    <FirstStepFormProps renderError={renderError} />,
    <SecondStepForm renderError={renderError} />,
    <ThirdStepForm renderError={renderError} />,
];

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    // wmomncie gdy dana partia danych z fomrmularza jest dobrze zmienia sie
    const [visibleStep, setVisibleStep] = useState(0);
    const doSomething = (values: MultistepFormValues) => {
        console.log(values);
    };
    return (
        <div className="multistep-form">
            <Formik
                initialValues={{
                    name: "",
                    surname: "",
                    email: "",
                    phonenumber: "",
                }}
                validationSchema={MultistepSchema}
                onSubmit={(values: MultistepFormValues, { setSubmitting }: FormikHelpers<MultistepFormValues>) => {
                    doSomething(values);
                    // alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}
            >
                <Form>
                    {showStep[visibleStep]}

                    {/* buttony mają byc włączone dopieru gdy inputy są wypełnione, submit kiedy wszystko dobrze jest */}
                    <button type="button" onClick={() => setVisibleStep(visibleStep - 1)} disabled={!visibleStep}>
                        Prev
                    </button>
                    <button
                        type="button"
                        onClick={() => setVisibleStep(visibleStep + 1)}
                        disabled={visibleStep === showStep.length - 1}
                    >
                        Next
                    </button>
                    <button type="reset">Reset</button>
                    <div>
                        <button type="submit">Wyślij</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default MultistepForm;
