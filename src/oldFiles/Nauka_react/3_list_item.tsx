import * as React from "react";

interface AppProps {}

interface AppState {
    select: string;
}

const User = (props: { user: any }) => (
    <div>
        <h1 className="name">{props.user.name}</h1>
        <h2 className="age">{props.user.age}</h2>
        <h2 className="sex">{props.user.sex}</h2>
    </div>
);

class App extends React.Component<AppProps, AppState> {
    state = { select: "all" };

    usersList = () => {
        let users = data.users;
        switch (this.state.select) {
            case "all":
                return users.map((user) => <User user={user} key={user.id} />);
            case "womens":
                users = users.filter((user) => user.sex === "female");
                return users.map((user) => <User user={user} key={user.id} />);
            case "mens":
                users = users.filter((user) => user.sex === "male");
                return users.map((user) => <User user={user} key={user.id} />);

            default:
                break;
        }
    };
    handleUsersFilter(option: any) {
        this.setState({
            select: option,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
                <button onClick={this.handleUsersFilter.bind(this, "womens")}>Kobiety</button>
                <button onClick={this.handleUsersFilter.bind(this, "mens")}>Mężczyźni</button>
                {this.usersList()}
            </div>
        );
    }
}

export default App;

const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek",
            sex: "male",
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
            sex: "female",
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
            sex: "female",
        },
        {
            id: 4,
            age: 24,
            name: "Karol",
            sex: "male",
        },
    ],
};
