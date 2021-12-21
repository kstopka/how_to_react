import { FunctionComponent } from "react";

interface HeaderProps {
    toggle: any;
    title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ toggle, title }) => {
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
