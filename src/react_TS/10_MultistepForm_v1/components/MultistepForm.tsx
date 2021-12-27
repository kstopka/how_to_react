import * as React from "react";
import { FunctionComponent, useReducer, useState } from "react";
import "../css/style.css";
import { reducer, initialState } from "../reducer/MultistepFormReducer";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";
import Validator from "../Validator";

interface MultistepFormProps {}

// const validation = {
//     name: (value, name) => Validator.whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`),
//     name: (value, name) => Validator.whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`),
//     name: (value, name) => Validator.whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`),
//     name: (value, name) => Validator.whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`),
// }

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    const [visibleStep, setVisibleStep] = useState(0);
    const [data, dispatchData] = useReducer(reducer, initialState);

    const handleChangeValue = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        let chceckIsError = false;
        let checkErrorMessage = "";

        // validation[name](value, name)
        if (name === "name" || name === "surname") {
            const { isError, errorMessage } = Validator.whetherTheNamePropertyIsCorrect(value, `Error MSG ${name}`);
            chceckIsError = isError;
            checkErrorMessage = errorMessage;
        }
        if (name === "email") {
            const { isError, errorMessage } = Validator.whetherTheEmailPropertyIsCorrect(value, `Error MSG ${name}`);
            chceckIsError = isError;
            checkErrorMessage = errorMessage;
        }
        if (name === "phonenumber") {
            const { isError, errorMessage } = Validator.whetherThePhoneNumberPropertyIsCorrect(
                value,
                `Error MSG ${name}`
            );
            chceckIsError = isError;
            checkErrorMessage = errorMessage;
        }
        setDispatchData(chceckIsError, checkErrorMessage, name, value);
    };
    // obiekt przy trzech wartosciach
    const setDispatchData = (isError: boolean, errorMessage: string, name: string, value: string) => {
        if (isError) {
            return dispatchData({ type: "setError", value: errorMessage, name });
        }
        dispatchData({ type: "setValue", value, name });
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        //typy
        const dataToArray = Object.values(data).every((item: any) => {
            if (!item.error) {
                if (!item.value) {
                    alert("");
                    return false;
                }
                return true;
            }

            return false;
        });
        if (!dataToArray) return;
        console.log(`send :${data}`);
    };

    const showStep = [
        <FirstStepForm handleChangeValue={handleChangeValue} />,
        <SecondStepForm handleChangeValue={handleChangeValue} />,
        <ThirdStepForm handleChangeValue={handleChangeValue} />,
    ];

    return (
        <div className="multistep-form">
            <form onSubmit={onSubmit}>{showStep[visibleStep]}</form>
            <button onClick={() => setVisibleStep(visibleStep - 1)} disabled={!visibleStep}>
                Prev
            </button>
            {visibleStep === showStep.length ? (
                <button disabled={true}>Next</button>
            ) : (
                <button type="button" onClick={() => setVisibleStep(visibleStep + 1)}>
                    Next
                </button>
            )}
        </div>
    );
};

export default MultistepForm;
