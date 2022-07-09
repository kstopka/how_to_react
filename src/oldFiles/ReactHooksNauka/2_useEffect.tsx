import * as React from "react";
import { useState, useEffect } from "react";

// w useEffect powinno znaleźć się:
// zapytania do API (fetch)
// subskrypcje (np. rxjs albo EventEmitter)
// timery (setTimeout i setInterval)
// aktualizacja document.title
// nasłuchiwanie na zdarzenia — np. resize

const allUsers = ["Michal", "Kasia", "Jacek", "Marta", "Tomek", "Ania"];
const getFilteredUsersForText = (text: string) => {
    return allUsers.filter((user) => user.toLowerCase().includes(text.toLowerCase()));
};

const App = () => {
    const [filteredUsers, setUsers] = useState(allUsers);

    const filterUsers = (e: any) => {
        const text = e.currentTarget.value;
        const filteredUsers = getFilteredUsersForText(text);
        setUsers(filteredUsers);
    };

    useEffect(() => {
        document.title = `Showing ${filteredUsers.length} users!`;
    }, [filteredUsers]); // 2

    return (
        <div>
            <input onInput={filterUsers} />
            <UsersList users={filteredUsers} />
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
