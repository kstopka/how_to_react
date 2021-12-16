import { FunctionComponent } from "react";

interface HeaderProps {
    toggle: any;
    title: string;
}

// OverLay

// z-index
// 1000 - formularz
// 1001 - 100%x100% wxh overlay

const Header: FunctionComponent<HeaderProps> = ({ toggle, title }) => {
    //NOTE: nie klikalne białe tło = header => wyłączenie toggle na tym polu
    return (
        <div className="header" style={{ zIndex: 55 }}>
            <h3 className="title">{title}</h3>
            <button className="toggle" onClick={toggle}>
                X
            </button>
        </div>
    );
};

export default Header;
