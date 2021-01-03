import React from "react";
import Card from "../Card/view";
import { ColumnProps } from "./column.types";
import "./style.scss";

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
  return (
    <div className="column-wrapper">
      <div className="column-title">{props.columnType}</div>

      <div className="column-data-container">
        {props.data.map((data, idx) => (
          <Card
            id={data.id}
            product={data.product}
            client={data.client}
            phone={data.phone}
            cost={data.cost}
            deliveryType={data.deliveryType}
            currentState={data.currentState}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
