import * as React from "react";
import { useState } from "react";

const ValidationMessage = (props: { txt: any }) => {
    const { txt } = props;
    return <p>{txt}</p>;
};

const App = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleCheckboxChange = () => {
        setIsConfirmed(!isConfirmed);
        setIsFormSubmitted(false);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        if (!isFormSubmitted) {
            setIsFormSubmitted(true);
        }
    };

    const displayMessage = () => {
        return isConfirmed ? <ValidationMessage txt="Positive" /> : <ValidationMessage txt="Negative" />;
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleFormSubmit}>
                <h1>Kup Bilet</h1>
                <input type="checkbox" name="age" id="age" checked={isConfirmed} onChange={handleCheckboxChange} />
                <label htmlFor="age">mam co najmniej 16 lat</label>
                <div>
                    <button type="submit">SEND</button>
                </div>
            </form>
            {isFormSubmitted ? displayMessage() : null}
        </div>
    );
};

export default App;
