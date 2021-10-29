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

const OrderForm = (
    change: React.ChangeEventHandler<HTMLInputElement> | undefined,
    submit: React.FormEventHandler<HTMLFormElement> | undefined,
    checked: boolean | undefined
) => {
    return (
        <form onSubmit={submit}>
            <h1>Kup Bilet</h1>
            <input type="checkbox" name="age" id="age" checked={checked} onChange={change} />
            <label htmlFor="age">mam co najmniej 16 lat</label>
            <div>
                <button type="submit">SEND</button>
            </div>
        </form>
    );
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
                <OrderForm change={this.handleCheckboxChange} submit={this.handleFormSubmit} checked={isConfirmed} />
                {isFormSubmitted ? this.displayMessage() : null}
            </div>
        );
    }
}

export default App;
