import * as React from "react";
import { useState, FunctionComponent } from "react";

interface AppProps {}

const User = ({ user }: { user: any }) => (
    <div>
        <h1 className="name">{user.name}</h1>
        <h2 className="age">{user.age}</h2>
        <h2 className="sex">{user.sex}</h2>
    </div>
);

const App: FunctionComponent<AppProps> = () => {
    const [select, setSelect] = useState("all");
    const handleUsersFilter = (option: any) => {
        setSelect(option);
    };

    const usersList = () => {
        let users = data.users;
        switch (select) {
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
    return (
        <div className="wrapper">
            <button onClick={handleUsersFilter.bind(this, "all")}>Wszyscy</button>
            <button onClick={handleUsersFilter.bind(this, "womens")}>Kobiety</button>
            <button onClick={handleUsersFilter.bind(this, "mens")}>Mężczyźni</button>
            {usersList()}
        </div>
    );
};

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
