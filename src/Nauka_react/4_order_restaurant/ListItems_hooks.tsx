import * as React from "react";
import Item from "./Item_hooks";

const ListItems = ({ items, changeStatus }: { items: any; changeStatus: any }) => {
    const newItems = items.map((item: { id: React.Key | null | undefined; name: string; active: any }) => (
        <Item key={item.id} id={item.id} name={item.name} active={item.active} changeStatus={changeStatus} />
    ));
    return (
        <div className="list">
            <h1>Twoje zamówienie</h1>
            <ul>{newItems}</ul>
        </div>
    );
};

export default ListItems;
