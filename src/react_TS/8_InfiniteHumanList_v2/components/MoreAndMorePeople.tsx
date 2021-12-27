import * as React from "react";
import { FunctionComponent } from "react";
import SinglePerson from "./SinglePerson";
import { objPersonType } from "../App.d";
import "../css/style.css";
// import { List, Collection } from "react-virtualized";
import { List, CellMeasurerCache, CellMeasurer, WindowScroller, AutoSizer } from "react-virtualized";

const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

interface MoreAndMorePeopleProps {
    items: objPersonType[];
}

// react visual list
const MoreAndMorePeople: FunctionComponent<MoreAndMorePeopleProps> = ({ items }) => {
    const renderRow = ({ index, key }: { index: any; key: any }) => {
        const person = items[index];
        return (
            <div key={key}>
                <div>{person.name}</div>
            </div>
        );
    };
    // const [endIndex, setEndIndex] = useState(10);

    // const showPeople = items.slice(0, endIndex).map((item, index) => (
    //index +1 do sprawdzenia: index modulo 10 === 0
    // ));
    // const showPeople = items.map((item, index) => renderRow(index,index) />);

    return (
        // <ul className="more-and-more-people">{/* <List /> */}</ul>
        <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowCount={items.length}
            rowRenderer={renderRow}
            // rowRenderer={({ key, index, style, parent }) => {
            //     const person = items[index];
            //     return <div key={key}>{person.name}</div>;
            // }}
        />
    );
};

export default MoreAndMorePeople;

// ./src/react_TS/8_InfiniteHumanList_v2/components/MoreAndMorePeople.tsx
// Module not found: Can't resolve 'react-virtualized' in 'C:\Users\admin_woi\Pulpit\GIt\react\auth_token_react_router\src\react_TS\8_InfiniteHumanList_v2\components'
