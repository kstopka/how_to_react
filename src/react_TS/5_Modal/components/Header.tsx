import * as React from "react";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <div className="header">
            <h1 className="title">Modal Title</h1> <div className="toggle">X</div>
        </div>
    );
};

export default Header;
