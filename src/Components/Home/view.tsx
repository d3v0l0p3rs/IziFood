import React, { useCallback, useMemo } from "react"
import Column from "../Column/view"
import "./style.scss"
import {
  filterPendingOrders,
  filterCookingOrders,
  filterReadyOrders,
} from "../../Redux/Reducers/Orders/orders.selectors"
import { useDispatch, useSelector } from "react-redux"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import CustomDialog from "../CustomDialog/view"
import { setAddOrderFormVisible } from "../../Redux/Reducers/Orders/orders.actions"
import { rootState } from "../../Redux/Store"

const Home: React.FC = () => {
  const dispatch = useDispatch()

  //selectors
  const pendingOrdersSelector = useMemo(() => filterPendingOrders, [])
  const cookingOrdersSelector = useMemo(() => filterCookingOrders, [])
  const readyOrdersSelector = useMemo(() => filterReadyOrders, [])

  const pendingOrders = useSelector(pendingOrdersSelector, () => false)
  const cookingOrders = useSelector(cookingOrdersSelector, () => false)
  const readyOrders = useSelector(readyOrdersSelector, () => false)

  const showAddOrderForm = useSelector(
    (state: rootState) => state.ordersReducer.showAddOrderForm,
  )

  const onSaveForm = useCallback(() => alert("positive"), [])
  const onCancelSaveForm = useCallback(
    () => dispatch(setAddOrderFormVisible(false)),
    [dispatch],
  )

  return (
    <div className="main-wrapper">
      <div className="home-wrapper">
        <Column columnType="pending" data={pendingOrders} />
        <Column columnType="cooking" data={cookingOrders} />
        <Column columnType="ready" data={readyOrders} />
      </div>

      <div className="fab-wapper">
        <Fab
          className="custom-fab"
          onClick={() => dispatch(setAddOrderFormVisible(true))}
        >
          <AddIcon />
        </Fab>
      </div>

      <CustomDialog
        show={showAddOrderForm}
        positiveAction={onSaveForm}
        negativeAction={onCancelSaveForm}
      />
    </div>
  )
}

export default Home
