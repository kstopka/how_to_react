import { FunctionComponent } from "react";

interface ChildrenProps {}

const Children: FunctionComponent<ChildrenProps> = () => {
    return (
        <div className="children">
            <h1>Content: </h1>{" "}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi autem magni tenetur nam minus
                repellat libero eligendi quisquam excepturi quo, blanditiis voluptas velit ad non, corporis alias sequi
                quod.
            </p>
        </div>
    );
};

export default Children;
