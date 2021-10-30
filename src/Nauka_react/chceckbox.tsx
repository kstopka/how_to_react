import * as React from "react";

interface AppProps {}

interface AppState {
    isConfirmed: boolean;
    isFormSubmitted: boolean;
}

const ValidationMessage = (props: { txt: any }) => {
    const { txt } = props;
    return <p>{txt}</p>;
};

class App extends React.Component<AppProps, AppState> {
    state = { isConfirmed: false, isFormSubmitted: false };

    handleFormSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!this.state.isFormSubmitted) {
            this.setState({ isFormSubmitted: true });
        }
    };

    handleCheckboxChange = () => {
        this.setState({ isConfirmed: !this.state.isConfirmed, isFormSubmitted: false });
    };

    displayMessage = () => {
        return this.state.isConfirmed ? <ValidationMessage txt="Positive" /> : <ValidationMessage txt="Negative" />;
    };

    render() {
        const { isConfirmed, isFormSubmitted } = this.state;
        return (
            <div className="wrapper">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Kup Bilet</h1>
                    <input
                        type="checkbox"
                        name="age"
                        id="age"
                        checked={isConfirmed}
                        onChange={this.handleCheckboxChange}
                    />
                    <label htmlFor="age">mam co najmniej 16 lat</label>
                    <div>
                        <button type="submit">SEND</button>
                    </div>
                </form>
                {isFormSubmitted ? this.displayMessage() : null}
            </div>
        );
    }
}

export default App;
