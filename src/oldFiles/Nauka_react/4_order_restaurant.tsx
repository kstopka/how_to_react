import * as React from "react";

import Header from "./4_order_restaurant/Header";
import ListItems from "./4_order_restaurant/ListItems";

interface AppProps {}

interface AppState {
    items: IItem[];
}

interface IItem {
    id: number;
    name: string;
    active: boolean;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        items: [
            {
                id: 1,
                name: "herbata",
                active: true,
            },
            {
                id: 2,
                name: "ziemniaki",
                active: false,
            },
            {
                id: 3,
                name: "kasza",
                active: false,
            },
            {
                id: 4,
                name: "zupa wodna",
                active: true,
            },
            {
                id: 5,
                name: "wrzątek",
                active: false,
            },
            {
                id: 6,
                name: "chleb",
                active: false,
            },
        ],
    };

    handleChangeStatus = (id: number) => {
        const items = this.state.items.map((item) => {
            if (id === item.id) {
                item.active = !item.active;
            }
            return item;
        });

        this.setState({ items });
    };

    render() {
        const { items } = this.state;
        return (
            <div className="wrapper">
                <h1>Order Restaurant</h1>
                <Header items={items} />
                <ListItems items={items} changeStatus={this.handleChangeStatus} />
            </div>
        );
    }
}

export default App;
