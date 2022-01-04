import * as React from "react";
import { FunctionComponent, useState } from "react";
import "../css/style.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { MultistepFormValues } from "../App.d";
import { MultistepSchema } from "../validator";

interface MultistepFormProps {}

const renderError = (message: string) => <p className="error-message">{message}</p>;

// const showStep = [<FirstStepForm />, <SecondStepForm />, <ThirdStepForm />];

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    const [visibleStep, setVisibleStep] = useState(0);
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
                    // console.log(values);
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}
            >
                <Form>
                    {}
                    <label htmlFor="name">name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" render={renderError} />

                    <label htmlFor="surname">surname</label>
                    <Field type="text" name="surname" />
                    <ErrorMessage name="surname" render={renderError} />

                    <label htmlFor="email">email</label>
                    <Field type="text" name="email" />
                    <ErrorMessage name="email" render={renderError} />

                    <label htmlFor="phonenumber">phonenumber</label>
                    <Field type="number" name="phonenumber" />
                    <ErrorMessage name="phonenumber" render={renderError} />
                    <button type="button" onClick={() => setVisibleStep(visibleStep - 1)} disabled={!visibleStep}>
                        Prev
                    </button>
                    <button type="button" onClick={() => setVisibleStep(visibleStep + 1)} disabled={visibleStep === 2}>
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
