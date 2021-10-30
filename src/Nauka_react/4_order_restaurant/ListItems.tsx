import * as React from "react";
import Item from "./Item";

const ListItems = (props: any) => {
    const items = props.items.map((item: { id: React.Key | null | undefined; name: any; active: any }) => (
        <Item key={item.id} id={item.id} name={item.name} active={item.active} changeStatus={props.changeStatus} />
    ));
    return (
        <div className="list">
            <h1>Twoje zamówienie</h1>
            <ul>{items}</ul>
        </div>
    );
};

export default ListItems;
