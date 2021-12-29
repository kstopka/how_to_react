import * as React from "react";
import { FunctionComponent, useCallback, useState } from "react";
import SinglePerson from "./SinglePerson";
import { objPersonType } from "../App.d";
import { List, AutoSizer, InfiniteLoader, IndexRange } from "react-virtualized";
import { fillArrayOfPeople } from "../data/people";

interface MoreAndMorePeopleProps {
    list: objPersonType[];
}

const MoreAndMorePeople: FunctionComponent<MoreAndMorePeopleProps> = ({ list }) => {
    const [rowCount, setRowCount] = useState(10);
    const rowRender = ({ index, key, style }: { index: any; key: any; style: any }) => {
        const person = list[index];
        return <SinglePerson person={person} key={key} style={style} />;
    };

    const isRowLoaded = useCallback(
        ({ index }) => {
            const numberOfItem = index + 1;
            const boolean = !!list[numberOfItem];
            // console.log(numberOfItem, boolean, rowCount, list.length);
            if (numberOfItem % 10 === 0 && numberOfItem === rowCount) {
                setRowCount(rowCount + 10);
            }
            return boolean;
        },
        [list, rowCount]
    );

    const loadMoreRows = ({ startIndex, stopIndex }: IndexRange) => {
        fillArrayOfPeople(10, list);
        setRowCount(rowCount + 10);
        return Promise.resolve();
    };

    return (
        <div style={{ width: "100%", height: "90vh" }}>
            <InfiniteLoader isRowLoaded={isRowLoaded} rowCount={list.length} loadMoreRows={loadMoreRows} threshold={5}>
                {({ onRowsRendered, registerChild }) => (
                    <AutoSizer>
                        {({ width, height }) => (
                            <List
                                onRowsRendered={onRowsRendered}
                                ref={registerChild}
                                width={width}
                                height={height}
                                rowHeight={50}
                                rowCount={rowCount}
                                rowRenderer={rowRender}
                            />
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        </div>
    );
};

export default MoreAndMorePeople;
