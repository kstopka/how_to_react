import * as React from "react";

interface FooterProps {
    toggle: any;
}

const Footer: React.FunctionComponent<FooterProps> = ({ toggle }) => {
    //NOTE: nie klikalne białe tło = footer => wyłączenie toggle na tym polu
    const callToActionLabel = () => {
        toggle();
        alert("OK");
    };
    return (
        <div className="footer">
            <button onClick={callToActionLabel}>ACCEPT</button>
            <button onClick={toggle}>CANCEL</button>
        </div>
    );
};

export default Footer;
