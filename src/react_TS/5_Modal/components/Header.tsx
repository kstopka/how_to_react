import * as React from "react";

interface HeaderProps {
    toggle: any;
    title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ toggle, title }) => {
    //NOTE: nie klikalne białe tło = header => wyłączenie toggle na tym polu
    return (
        <div className="header">
            <h3 className="title">{title}</h3>
            <button className="toggle" onClick={toggle}>
                X
            </button>
        </div>
    );
};

export default Header;
