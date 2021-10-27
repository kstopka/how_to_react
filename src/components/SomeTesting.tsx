import React from "react";

const SomeTesting = ({ title = "Testing" }) => {
    const onClickHandler = () => {
        alert("Clicked!");
    };
    const onChangeInput = () => {
        console.log("ok");
    };

    return (
        <>
            <h2>{title}</h2>
            <button onClick={onClickHandler}>{`Click Me`}</button>
            <input onChange={onChangeInput}></input>
        </>
    );
};

export default SomeTesting;
