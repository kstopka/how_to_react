import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FunctionComponent, useContext, useState } from "react";
import "./style.css";
import ItemDetailView from "./ItemDetailView";
import { Context } from "../Context";
import { Fruit } from "../App.d";

interface ItemsListViewProps {}

const ItemsListView: FunctionComponent<ItemsListViewProps> = ({}) => {
  const {
    state: { items },
  } = useContext(Context);

  const [chosenItem, setChosenItem] = useState<Fruit>({
    name: "",
    id: "",
    price: 0,
  });

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="list">
          <h2>ItemsListViewProps</h2>
          <ul>
            {items.length > 0 &&
              items.map((item, index) => (
                <li key={item.id + index}>
                  <Link to={`/${item.id}`} onClick={() => setChosenItem(item)}>
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="item">
          <h2>Item</h2>
          <Routes>
            <Route
              path={`/${chosenItem.id}`}
              element={<ItemDetailView choosedItem={chosenItem} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default ItemsListView;
