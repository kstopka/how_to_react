import * as React from "react";
import { FunctionComponent, useContext, useState } from "react";
import "../css/style.css";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import ThirdStepForm from "./ThirdStepForm";
import { validation } from "../Validator";
import { DataProvider, DataContext } from "../context/DataContext";

interface MultistepFormProps {}

const MultistepForm: FunctionComponent<MultistepFormProps> = () => {
    const [visibleStep, setVisibleStep] = useState(0);
    const { data, dispatchData } = useContext(DataContext);
    // const [data, dispatchData] = useReducer(dataReducer, initidalDataState);

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
        <DataProvider>
            <div className="multistep-form">
                <form onSubmit={onSubmit}>{showStep[visibleStep]}</form>
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
                {data}
            </div>
        </DataProvider>
    );
};

export default MultistepForm;
