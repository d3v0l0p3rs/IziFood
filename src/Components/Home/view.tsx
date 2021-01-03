import React, { useMemo } from "react";
import Column from "../Column/view";
import "./style.scss";
import {
  filterPendingOrders,
  filterCookingOrders,
  filterDoneOrders,
} from "../../Redux/Reducers/Orders/orders.selectors";
import { useSelector } from "react-redux";

export default function Home() {
  //selectors
  const pendingOrdersSelector = useMemo(() => filterPendingOrders, []);
  const cookingOrdersSelector = useMemo(() => filterCookingOrders, []);
  const doneOrdersSelector = useMemo(() => filterDoneOrders, []);

  const pendingOrders = useSelector(pendingOrdersSelector, () => false);
  const cookingOrders = useSelector(cookingOrdersSelector, () => false);
  const doneOrders = useSelector(doneOrdersSelector, () => false);

  return (
    <div className="home-wrapper">
      <Column columnType="pending" data={pendingOrders || []} />
      <Column columnType="cooking" data={cookingOrders || []} />
      <Column columnType="ready" data={doneOrders || []} />
    </div>
  );
}
