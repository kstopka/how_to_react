import * as React from "react";
import { FunctionComponent, useContext, useState } from "react";
import "../css/style.css";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";
import { validation } from "../Validator";
import { DataContext } from "../context/DataContext";

interface MultistepFormProps {}

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    const { data, dispatchData } = useContext(DataContext);

    const handleChangeValue = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            return dispatchData({ type: "setError", value: errorMessage, name });
        }
        dispatchData({ type: "setValue", value, name });
    };

    //dodac do contextu
    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const dataToArray = Object.values(data).every((item: { error: boolean; value: string }) => {
            if (item.error) {
                alert("Somewhere is error");
                return false;
            }
            if (!item.value) {
                alert("Fill all inputs");
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
            <form onSubmit={onSubmit}>{showStep[data.visibleStep]}</form>
            <button
                type="button"
                onClick={() => dispatchData({ type: "setVisibleStep", name: "subtraction", value: "1" })}
                disabled={!data.visibleStep}
            >
                Prev
            </button>
            <button
                type="button"
                onClick={() => dispatchData({ type: "setVisibleStep", name: "addition", value: "1" })}
                disabled={data.visibleStep === showStep.length - 1}
            >
                Next
            </button>
        </div>
    );
};

export default MultistepForm;
