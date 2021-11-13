import * as React from "react";

interface AppProps {}

interface AppState {
    // city: string;
    // text: string;
    // isLoved: true;
    // number: string;
}

class App extends React.Component<AppProps, AppState> {
    state = { city: "Warszawa", text: "some Text", isLoved: true, number: "0" };
    handleChange = (e: any) => {
        if (e.target.type === "checkbox") {
            this.setState({ [e.target.name]: e.target.checked });
            return;
        }
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <div className="wrapper">
                <h1>Form</h1>
                <div>
                    <label>
                        Podaj miasto:
                        <div>
                            <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
                        </div>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Proszę napisz coś ciekawego:
                        <div>
                            <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                        </div>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Czy lubisz to miasto?
                        <div>
                            <input
                                name="isLoved"
                                type="checkbox"
                                checked={this.state.isLoved}
                                onChange={this.handleChange}
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Ile razy tam byles
                        <div>
                            <select name="number" value={this.state.number} onChange={this.handleChange.bind(this)}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="more">więcej</option>
                            </select>
                        </div>
                    </label>
                </div>
            </div>
        );
    }
}

export default App;
