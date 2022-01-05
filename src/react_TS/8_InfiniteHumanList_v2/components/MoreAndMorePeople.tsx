import { FunctionComponent } from "react";
import { List, AutoSizer, InfiniteLoader } from "react-virtualized";
import { useInfiniteLoader } from "../hooks/useInfiniteLoader";
import { objPersonType } from "../App.d";
interface MoreAndMorePeopleProps {
    list: objPersonType[];
}

const MoreAndMorePeople: FunctionComponent<MoreAndMorePeopleProps> = ({ list }) => {
    const { loadMoreRows, isRowLoaded, rowRender, rowCount } = useInfiniteLoader(list);

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
