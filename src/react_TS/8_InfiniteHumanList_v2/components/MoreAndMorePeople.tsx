import * as React from "react";
import { FunctionComponent, useState } from "react";
import SinglePerson from "./SinglePerson";
import { objPersonType } from "../App.d";
import "../css/style.css";
import { List, InfiniteLoader, CellMeasurerCache, CellMeasurer } from "react-virtualized";

const rowHeight = 50;
interface MoreAndMorePeopleProps {
    items: objPersonType[];
}

const MoreAndMorePeople: FunctionComponent<MoreAndMorePeopleProps> = ({ items }) => {
    const renderRow = ({ index, key }: { index: any; key: any }) => {
        const person = items[index];
        return <SinglePerson key={key} person={person} />;
    };

    const isRowLoaded = ({ index }: { index: number }) => {
        return !!items[index];
    };

    const loadMoreRows = ({ startIndex, stopIndex }: { startIndex: number; stopIndex: number }) => {};

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={loadMoreRows} rowCount={remoteRowCount}>
                {({ onRowsRendered, registerChild }) => (
                    <List
                        width={500}
                        height={600}
                        rowHeight={50}
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        rowCount={remoteRowCount}
                        rowRenderer={renderRow}
                        className="more-and-more-people"
                    />
                )}
            </InfiniteLoader>
        </div>
    );
};

export default MoreAndMorePeople;
