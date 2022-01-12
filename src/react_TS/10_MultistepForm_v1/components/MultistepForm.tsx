import { FunctionComponent, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { chceckShowedStep } from "../Validator";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";
import Buttons from "./Buttons";
import "../css/style.css";

interface MultistepFormProps {}

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    const { state, onSubmit } = useContext(DataContext);
    const { visibleStep } = state;

    const showStep = [<FirstStepForm />, <SecondStepForm />, <ThirdStepForm />];

    if (chceckShowedStep(state))
        return (
            <div className="multistep-form">
                <form onSubmit={onSubmit}>
                    {showStep[visibleStep]}
                    <Buttons length={showStep.length} />
                </form>
            </div>
        );
    return (
        <div className="multistep-form">
            <form onSubmit={onSubmit}>{showStep[visibleStep]}</form>
        </div>
    );
};

export default MultistepForm;
