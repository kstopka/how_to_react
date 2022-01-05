import { useState, useCallback } from "react";
import { IndexRange } from "react-virtualized";
import SinglePerson from "../components/SinglePerson";
import { fillArrayOfPeople } from "../data/people";
import { objPersonType } from "../App.d";

export const useInfiniteLoader = (list: objPersonType[]) => {
    const [rowCount, setRowCount] = useState(10);

    const rowRender = ({ index, key, style }: { index: any; key: any; style: any }) => {
        const person = list[index];
        return <SinglePerson person={person} key={key} style={style} />;
    };
    const isRowLoaded = useCallback(
        ({ index }) => {
            const numberOfItem = index + 1;
            const boolean = Boolean(list[numberOfItem]);
            if (numberOfItem % 10 === 0 && numberOfItem === rowCount) {
                setRowCount(rowCount + 10);
            }
            return boolean;
        },
        [list, rowCount]
    );

    const loadMoreRows = ({ startIndex, stopIndex }: IndexRange) => {
        // promisa i w srodku setinterval z zapytaniem
        fillArrayOfPeople(10, list);
        setRowCount(rowCount + 10);
        return Promise.resolve();
    };

    return { loadMoreRows, isRowLoaded, rowRender, rowCount };
};
