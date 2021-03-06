import { FunctionComponent } from "react";

interface PaginationButtonProps {
    txt: string;
    active?: boolean;
    action?: any;
}

const PaginationButton: FunctionComponent<PaginationButtonProps> = ({ txt, action = () => {}, active = true }) => {
    if (active) return null;
    return <button onClick={action}>{txt}</button>;
};

export default PaginationButton;
