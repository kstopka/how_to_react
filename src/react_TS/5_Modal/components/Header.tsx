import * as React from "react";

interface HeaderProps {
    toggle: any;
    title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ toggle, title }) => {
    //TODO: nie klikalne białe tło = header
    return (
        <div className="header">
            <h1 className="title">{title}</h1>
            <div className="toggle" onClick={toggle}>
                X
            </div>
        </div>
    );
};

export default Header;
