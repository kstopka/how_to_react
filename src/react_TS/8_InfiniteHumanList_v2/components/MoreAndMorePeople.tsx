import * as React from "react";
import { FunctionComponent, useCallback, useState } from "react";
import SinglePerson from "./SinglePerson";
import { objPersonType } from "../App.d";
import "../css/style.css";
import { List, InfiniteLoader, IndexRange, AutoSizer } from "react-virtualized";
import { fillArrayOfPeople } from "../data/people";

interface MoreAndMorePeopleProps {
    list: objPersonType[];
}

const MoreAndMorePeople: FunctionComponent<MoreAndMorePeopleProps> = ({ list }) => {
    const [rowCount, setRowCount] = useState(100);
    const renderRow = ({ index, key }: { index: any; key: any }) => {
        const person = list[index];
        return <SinglePerson key={key} person={person} />;
    };

    const isRowLoaded = useCallback(
        ({ index }) => {
            if ((index + 1) % 10 === 0) {
                setRowCount(rowCount + 10);
                return true;
            }
            if (index === list.length) {
                return false;
            }
            return true;
        },
        [list.length, rowCount]
    );

    const loadMoreRows = ({ startIndex, stopIndex }: IndexRange) => {
        return new Promise((resolve) => {
            fillArrayOfPeople(10, list);
            console.log(list);
        });
    };

    return (
        <div style={{ width: "100%" }}>
            <InfiniteLoader isRowLoaded={isRowLoaded} rowCount={10} loadMoreRows={loadMoreRows} threshold={10}>
                {({ onRowsRendered, registerChild }) => (
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <List
                                onRowsRendered={onRowsRendered}
                                ref={registerChild}
                                width={width}
                                height={800}
                                rowHeight={50}
                                rowCount={rowCount}
                                rowRenderer={renderRow}
                                className="more-and-more-people"
                            />
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        </div>
    );
};

export default MoreAndMorePeople;
