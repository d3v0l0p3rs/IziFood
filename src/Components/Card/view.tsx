import React, { useState } from "react";
import "./style.scss";
import { CardProps, state, NextOrPrev } from "./card.types";

const states = ["on_hold", "in_progress", "ready", "done", "cancel"];

const changeState = (nextOrPrev: NextOrPrev) => {
  // Identificar el estado de la card y pasarlo al siguiente o anterior según sea el caso, también cambiar los labels de los botones
};

const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
  const [state, setState] = useState<state>("on_hold"); // Pone el estado inicial en la card, que no sé cuál es :v
  const [prevButtonLabel, setPrevButtonLabel] = useState<string>("Anterior"); // Algun valor por defecto para el botón de anterior
  const [nextButtonLabel, setNextButtonLabel] = useState<string>("Después"); // Algun valor por defecto para el botón de después

  return (
    <div className="card-info-wapper">
      <div>
        Cliente: <span>{props.client}</span>
      </div>

      <div>
        producto: <span>{props.product}</span>
      </div>

      <div>
        telefono: <span>{props.phone}</span>
      </div>

      <div>
        costo: <span>{props.cost}</span>
      </div>

      <div>
        tipo de entrega: <span>{props.deliveryType}</span>
      </div>

      <div>
        estado: <span>{state}</span>
      </div>

      <div className="card-buttons-wrapper">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export { Card };
