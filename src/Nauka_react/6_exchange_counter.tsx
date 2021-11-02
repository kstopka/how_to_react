import * as React from "react";

interface AppProps {}

interface AppState {}

const Cash = (props: any) => {
    const cash = props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2);
    return (
        <div>
            {props.title}
            {cash}
        </div>
    );
};
class App extends React.Component<AppProps, AppState> {
    state = {
        amount: "5.435",
    };
    currencies = [
        {
            id: 1,
            name: "dollar",
            ratio: 3.6,
            title: "Wartość w dolarach: ",
        },
        {
            id: 2,
            name: "euro",
            ratio: 4.1,
            title: "Wartość w euro: ",
        },
        {
            id: 3,
            name: "pound",
            ratio: 4.55,
            title: "Wartość w funtach: ",
        },
    ];

    handleChange = (e: any) => {
        this.setState({ amount: e.target.value });
    };
    render() {
        const { amount } = this.state;
        const calculators = this.currencies.map((currency) => (
            <Cash key={currency.id} cash={amount} ratio={currency.ratio} title={currency.title} />
        ));
        return (
            <div className="wrapper">
                <h1>Exchange Counter</h1>
                <label htmlFor="">
                    <input value={amount} onChange={this.handleChange} type="number" />
                </label>
                {calculators}
            </div>
        );
    }
}

export default App;
