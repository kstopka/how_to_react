import * as React from "react";

const Item = ({
    name,
    active,
    id,
    changeStatus,
}: {
    name: string;
    active: boolean;
    id: React.Key | null | undefined;
    changeStatus: any;
}) => (
    <li
        onClick={() => {
            changeStatus(id);
        }}
        style={active ? { color: "green" } : { color: "gray" }}
    >
        {name}
    </li>
);

export default Item;
