import React, { useState } from "react";
import "./style.scss";
import { CardProps, NextOrPrev } from "./card.types";
import PersonIcon from "@material-ui/icons/Person";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CallIcon from "@material-ui/icons/Call";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
  return (
    <div className="card-info-wapper">
      <div className="card-info-data-wrapper">
        <div>
          <PersonIcon />
        </div>
        <div>
          <span>{props.client}</span>
        </div>
      </div>

      <div className="card-info-data-wrapper">
        <div>
          <FastfoodIcon />
        </div>
        <div>
          <span>{props.product}</span>
        </div>
      </div>

      <div className="card-info-data-wrapper">
        <div>
          <CallIcon />
        </div>
        <div>
          <span>{props.phone}</span>
        </div>
      </div>

      <div className="card-info-data-wrapper">
        <div>
          <AttachMoneyIcon />
        </div>
        <div>
          <span>{props.cost}</span>
        </div>
      </div>

      <div className="card-info-data-wrapper">
        <div>
          <AllInboxIcon />
        </div>
        <div>
          <span>{props.deliveryType}</span>
        </div>
      </div>

      <div className="card-info-data-wrapper">
        <div>
          <HourglassEmptyIcon />
        </div>
        <div>
          <span>{props.currentState}</span>
        </div>
      </div>

      <div className="card-buttons-wrapper">
        <button>{<NavigateBeforeIcon />}</button>
        <button>{<NavigateNextIcon />}</button>
      </div>
    </div>
  );
};

export { Card };
