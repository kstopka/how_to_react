import * as React from "react";
import { FunctionComponent, useReducer, useState } from "react";
import "../css/style.css";
import { reducer, initialState } from "../reducer/MultistepFormReducer";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";
import { validation } from "../Validator";

interface MultistepFormProps {}

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    const [visibleStep, setVisibleStep] = useState(0);
    const [data, dispatchData] = useReducer(reducer, initialState);

    const handleChangeValue = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            return dispatchData({ type: "setError", value: errorMessage, name });
        }
        dispatchData({ type: "setValue", value, name });
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        //NOTE typy
        const dataToArray = Object.values(data).every((item: any) => {
            if (item.error) {
                alert("gdzies jest blad");
                return false;
            }
            if (!item.value) {
                alert("Uzupełnij wszystkie pola");
                return false;
            }
            return true;
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
