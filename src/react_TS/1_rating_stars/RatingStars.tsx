import * as React from "react";
import ratings from "./data.json";
import RatingList from "./RatingList";

interface AppProps {}

interface AppState {}

const data = ratings;

class App extends React.Component<AppProps, AppState> {
    state = { ratings: [] };
    componentDidMount() {
        this.setState({ ratings: data });
    }
    render() {
        const { ratings } = this.state;
        return (
            <div className="wrapper">
                <h1>Rating Stars</h1>
                <RatingList ratings={ratings} />
            </div>
        );
    }
}

export default App;
