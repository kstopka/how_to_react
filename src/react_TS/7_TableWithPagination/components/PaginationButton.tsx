import { FunctionComponent } from "react";

interface PaginationButtonProps {
    txt: string;
    active?: boolean;
    action: () => void;
}

const PaginationButton: FunctionComponent<PaginationButtonProps> = ({ txt, action, active = false }) => {
    return (
        <div className="pagination-button">
            <button onClick={action} disabled={active}>
                {txt}
            </button>
        </div>
    );
};

export default PaginationButton;
