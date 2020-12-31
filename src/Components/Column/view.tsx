import React from "react";
import { Card } from "../Card/view";
import { ColumnProps } from "./column.types";
import { CardProps } from "../Card/card.types";
import "./style.scss";

const Column: React.FC<ColumnProps> = (props: ColumnProps): JSX.Element => {
  const test: CardProps[] = [
    {
      product: "Papitas",
      client: "Andros",
      phone: "123456",
      cost: 1234,
      deliveryType: "tipo1",
    },
    {
      product: "Papitas",
      client: "Andros",
      phone: "123456",
      cost: 1234,
      deliveryType: "tipo1",
    },
  ];

  return (
    <div className="column-wrapper">
      <div className="column-title">{props.columnType}</div>

      <div className="column-data-container">
        {test.map((data, idx) => (
          <Card
            product={data.product}
            client={data.client}
            phone={data.phone}
            cost={data.cost}
            deliveryType={data.deliveryType}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
