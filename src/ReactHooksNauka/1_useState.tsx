import * as React from "react";
import { useState } from "react";

const allUsers = ["Michal", "Kasia", "Jacek", "Marta", "Tomek", "Ania"];
const getFilteredUsersForText = (text: string) => {
    return allUsers.filter((user) => user.toLowerCase().includes(text.toLowerCase()));
};

// useState
// useEffect
// useContext

const App = () => {
    // skrót usf

    // useState zwraca tablice z dwoma elementami
    // counter to stan
    // setCounter to funkcja zmieniająca stan
    // useState jako argument przyjmuje stan początkowy - 0
    // useState nadpisuje stan
    const [counter, setCounter] = useState(0);
    const [filteredUsers, setUsers] = useState(allUsers);

    const filterUsers = (e: any) => {
        const text = e.currentTarget.value;
        const filteredUsers = getFilteredUsersForText(text);
        setUsers(filteredUsers);
    };

    return (
        <div>
            <div className="counter">
                {counter}
                <button onClick={() => setCounter((counter) => counter + 1)}>DODAJ</button>
            </div>
            <div className="filterUser">
                <input onInput={filterUsers} />
                <UsersList users={filteredUsers} />
            </div>
        </div>
    );
};
const UsersList = (props: { users: any }) => {
    const { users } = props;
    if (users.length > 0) {
        return (
            <ul>
                {users.map((user: any) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        );
    }

    return <p>No results!</p>;
};
export default App;
