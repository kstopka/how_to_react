import React, { FunctionComponent } from "react";
import { Fruit } from "../App.d";

interface ItemDetailViewProps {
  choosedItem: Fruit;
}

const ItemDetailView: FunctionComponent<ItemDetailViewProps> = ({
  choosedItem: { name, id, price },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
    </div>
  );
};

export default ItemDetailView;
