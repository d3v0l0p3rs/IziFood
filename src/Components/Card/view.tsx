import React from "react";
import "./style.scss";
import { CardProps, OrderState } from "./card.types";
import PersonIcon from "@material-ui/icons/Person";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CallIcon from "@material-ui/icons/Call";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { changeOrderStatus } from "../../Redux/Reducers/Orders/orders.actions";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../Redux/Store";

const Card: React.FC<CardProps> = (props: CardProps) => {
  const dispatch = useDispatch();

  const orders = useSelector((state: rootState) => state.ordersReducer.orders);

  const setNextOrderStatus = (id: number) => {
    const index = orders.findIndex((order) => order.id === id);
    let tempNewOrders = [...orders]; //copy of current orders

    let newStatus: OrderState = "cancel";

    //temporal solution
    switch (tempNewOrders[index].currentState) {
      case "on_hold":
        newStatus = "in_progress";
        break;

      case "in_progress":
        newStatus = "ready";
        break;

      default:
        newStatus = "on_hold";
        break;
    }

    tempNewOrders[index] = {
      ...orders[index],
      currentState: newStatus,
    };
    dispatch(changeOrderStatus(tempNewOrders));
  };

  const setPreviousOrderStatus = (id: number) => {
    const index = orders.findIndex((order) => order.id === id);
    let tempNewOrders = [...orders]; //copy of current orders

    let newStatus: OrderState = "cancel";

    //temporal solution
    switch (tempNewOrders[index].currentState) {
      case "in_progress":
        newStatus = "on_hold";
        break;

      case "ready":
        newStatus = "in_progress";
        break;

      default:
        newStatus = "on_hold";
        break;
    }

    tempNewOrders[index] = {
      ...orders[index],
      currentState: newStatus,
    };
    dispatch(changeOrderStatus(tempNewOrders));
  };

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
        <button
          onClick={() => setPreviousOrderStatus(props.id)}
          disabled={props.currentState === "on_hold"}
        >
          <NavigateBeforeIcon />
        </button>
        <button
          onClick={() => setNextOrderStatus(props.id)}
          disabled={props.currentState === "ready"}
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;
