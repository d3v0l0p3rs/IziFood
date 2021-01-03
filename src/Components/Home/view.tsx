import React, { useMemo } from "react";
import Column from "../Column/view";
import "./style.scss";
import {
  filterPendingOrders,
  filterCookingOrders,
  filterReadyOrders,
} from "../../Redux/Reducers/Orders/orders.selectors";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  //selectors
  const pendingOrdersSelector = useMemo(() => filterPendingOrders, []);
  const cookingOrdersSelector = useMemo(() => filterCookingOrders, []);
  const readyOrdersSelector = useMemo(() => filterReadyOrders, []);

  const pendingOrders = useSelector(pendingOrdersSelector, () => false);
  const cookingOrders = useSelector(cookingOrdersSelector, () => false);
  const readyOrders = useSelector(readyOrdersSelector, () => false);

  return (
    <div className="home-wrapper">
      <Column columnType="pending" data={pendingOrders} />
      <Column columnType="cooking" data={cookingOrders} />
      <Column columnType="ready" data={readyOrders} />
    </div>
  );
};

export default Home;
