import * as React from "react";

const Item = (props: any) => (
    <li
        onClick={() => {
            props.changeStatus(props.id);
        }}
        style={props.active ? { color: "green" } : { color: "gray" }}
    >
        {props.name}
    </li>
);

export default Item;
