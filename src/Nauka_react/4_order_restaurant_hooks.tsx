import * as React from "react";
import { useState, FunctionComponent } from "react";
import Header from "./4_order_restaurant/Header_hooks";
import ListItems from "./4_order_restaurant/ListItems_hooks";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const [items, setItems] = useState(dataItems);
    const handleChangeStatus = (id: number) => {
        setItems(
            items.map((item) => {
                if (id === item.id) {
                    item.active = !item.active;
                }
                return item;
            })
        );
    };
    return (
        <div>
            <h1>Order Restaurant</h1>
            <Header items={items} />
            <ListItems items={items} changeStatus={handleChangeStatus} />
        </div>
    );
};

export default App;

const dataItems = [
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
];
