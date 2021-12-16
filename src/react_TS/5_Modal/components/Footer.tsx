import { FunctionComponent } from "react";
interface FooterProps {
    toggle: any;
}

const Footer: FunctionComponent<FooterProps> = ({ toggle }) => {
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
