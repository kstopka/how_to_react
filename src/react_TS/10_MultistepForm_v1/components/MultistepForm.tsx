import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { chceckShowedStep, validation } from "../Validator";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";
import Buttons from "./Buttons";
import "../css/style.css";
import { Types } from "../App.d";

interface MultistepFormProps {}

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    const { state, dispatch } = useContext(DataContext);
    const { visibleStep, data } = state;

    const handleChangeValue = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            return dispatch({ type: Types.setError, payload: { name, value: errorMessage } });
        }
        dispatch({ type: Types.setValue, payload: { name, value } });
    };

    //dodac do contextu
    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log(`send :${data}`);
    };

    const showStep = [
        <FirstStepForm handleChangeValue={handleChangeValue} />,
        <SecondStepForm handleChangeValue={handleChangeValue} />,
        <ThirdStepForm handleChangeValue={handleChangeValue} />,
    ];

    if (chceckShowedStep(state))
        return (
            <div className="multistep-form">
                <form onSubmit={onSubmit}>{showStep[visibleStep]}</form>
                <Buttons length={showStep.length} />
            </div>
        );
    return (
        <div className="multistep-form">
            <form onSubmit={onSubmit}>{showStep[visibleStep]}</form>
        </div>
    );
};

export default MultistepForm;
