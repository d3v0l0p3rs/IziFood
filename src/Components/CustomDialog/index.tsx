import React from "react"
import { useForm } from "react-hook-form"

import { CustomDialogProps } from "./customdialog.types"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { CardProps } from "../Card/card.types"
import { CREATE_ORDER_FORM_LABELS, CREATE_ORDERS_FORMS_NAMES  } from "./constants"
import { useDispatch, useSelector } from "react-redux"
import { addOrder } from "../../Redux/Reducers/Orders/orders.actions"
import { rootState } from "../../Redux/Store"
import styles from "./styles.module.scss"

export default function CustomDialog(props :CustomDialogProps) {
  const dispatch = useDispatch()
  const currentCards = useSelector(
    (state: rootState) => state.ordersReducer.orders,
  )

  const { register, handleSubmit, watch, errors } = useForm<CardProps>({mode: "all"})
  const onSubmit = handleSubmit(data => {
    data.currentState = "on_hold"
    data.id= 4
    const newOrders = [
      ...currentCards,
      data
    ]
    dispatch(addOrder(newOrders))
  })
  return (
    <Dialog open={props.show}>
      <DialogTitle id="form-dialog-title">Crear orden</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent className={styles.dialogContent}>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.client}>{CREATE_ORDER_FORM_LABELS.client}</label>
          <input autoFocus name={CREATE_ORDERS_FORMS_NAMES.client} id={CREATE_ORDERS_FORMS_NAMES.client} 
            ref={register({ required: true })}/>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.product}>{CREATE_ORDER_FORM_LABELS.product}</label>
          <input name={CREATE_ORDERS_FORMS_NAMES.productList} id={CREATE_ORDERS_FORMS_NAMES.productList}
            ref={register({ required: true })}/>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.note}>{CREATE_ORDER_FORM_LABELS.note}</label>
          <input name={CREATE_ORDERS_FORMS_NAMES.note} id={CREATE_ORDERS_FORMS_NAMES.note} 
            ref={register({ required: true })}/>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.phone}>{CREATE_ORDER_FORM_LABELS.phone}</label>
          <input type="number" name={CREATE_ORDERS_FORMS_NAMES.phone} id={CREATE_ORDERS_FORMS_NAMES.phone} 
            ref={register({ required: true })}/>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.address}>{CREATE_ORDER_FORM_LABELS.address}</label>
          <input name={CREATE_ORDERS_FORMS_NAMES.address} id={CREATE_ORDERS_FORMS_NAMES.address} 
            ref={register({ required: true })}/>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.neighborhood}>{CREATE_ORDER_FORM_LABELS.neighborhood}</label>
          <input name={CREATE_ORDERS_FORMS_NAMES.neighborhood} id={CREATE_ORDERS_FORMS_NAMES.neighborhood} 
            ref={register({ required: true })}/>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.cost}>{CREATE_ORDER_FORM_LABELS.cost}</label>
          <input type="number" name={CREATE_ORDERS_FORMS_NAMES.cost} id={CREATE_ORDERS_FORMS_NAMES.cost}
            ref={register({ required: true })}/>
          <label htmlFor={CREATE_ORDER_FORM_LABELS.deliveryType}>{CREATE_ORDER_FORM_LABELS.deliveryType}</label>
          <input type="deliveryType" name={CREATE_ORDERS_FORMS_NAMES.deliveryType} id={CREATE_ORDERS_FORMS_NAMES.deliveryType} 
            ref={register({ required: true })}/>
        </DialogContent>
        <DialogActions>
          <button onClick={() => props.negativeAction()} type="button">Cancelar</button>
          <button type="submit">Guardar</button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
