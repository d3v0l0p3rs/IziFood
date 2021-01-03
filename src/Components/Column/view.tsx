import React from "react";
import { Card } from "../Card/view";
import { ColumnProps } from "./column.types";
import { CardProps } from "../Card/card.types";
import "./style.scss";

const Column: React.FC<ColumnProps> = (props: ColumnProps): JSX.Element => {
  return (
    <div className="column-wrapper">
      <div className="column-title">{props.columnType}</div>

      <div className="column-data-container">
        {props.data.map((data, idx) => (
          <Card
            product={data.product}
            client={data.client}
            phone={data.phone}
            cost={data.cost}
            deliveryType={data.deliveryType}
            currentState="in_progress"
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
