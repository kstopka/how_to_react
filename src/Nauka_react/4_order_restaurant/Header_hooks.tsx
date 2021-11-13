import * as React from "react";

const Header = ({ items }: { items: any }) => {
    const activeItems = items.filter((item: { active: boolean }) => item.active);
    const number = activeItems.length;
    return (
        <header>
            <h2>Wielkość zamówienia: {number}</h2>
            <h2>Do zapłaty: {number ? number * 10 : "0"}</h2>
        </header>
    );
};

export default Header;
