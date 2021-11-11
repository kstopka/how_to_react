import ShowStars from "./ShowStars";

const Rating = ({
    name,
    score,
    content,
    recordId,
}: {
    name: string;
    score: number;
    content: string;
    recordId: string;
}) => {
    // NOTE: content ma mieć 120 znakow, tak po prostu?
    content = content.slice(0, 119);

    return (
        <li>
            <h1>{name}</h1>
            {<ShowStars number={score} />}
            <p>{content}</p>
        </li>
    );
};

export default Rating;
