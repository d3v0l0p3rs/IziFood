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
import { addOrder } from "../../../../Redux/Reducers/Orders/orders.actions"
import { rootState } from "../../../../Redux/Store"
import styles from "./styles.module.scss"
import CustomInput from "../CustomInput"

export default function CustomDialog(props :CustomDialogProps): JSX.Element {
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
      data,
    ]
    dispatch(addOrder(newOrders))
  })
  return (
    <Dialog open={props.show}>
      <DialogTitle id="form-dialog-title">Crear orden</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent className={styles.dialogContent}>
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.client}
            label={CREATE_ORDER_FORM_LABELS.client}
            inputRef={register({ required: true})}
          />
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.productList}
            label={CREATE_ORDER_FORM_LABELS.product}
            inputRef={register({ required: true})}
          />
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.note}
            label={CREATE_ORDER_FORM_LABELS.note}
            inputRef={register({ required: true})}
          />
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.phone}
            label={CREATE_ORDER_FORM_LABELS.phone}
            type="number"
            inputRef={register({ required: true})}
          />
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.address}
            label={CREATE_ORDER_FORM_LABELS.address}
            inputRef={register({ required: true})}
          />
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.neighborhood}
            label={CREATE_ORDER_FORM_LABELS.neighborhood}
            inputRef={register({ required: true})}
          />
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.cost}
            label={CREATE_ORDER_FORM_LABELS.cost}
            inputRef={register({ required: true})}
            type="number"
          />
          <CustomInput
            inputName={CREATE_ORDERS_FORMS_NAMES.deliveryType}
            label={CREATE_ORDER_FORM_LABELS.deliveryType}
            inputRef={register({ required: true})}
          />
        </DialogContent>
        <DialogActions>
          <button onClick={() => props.negativeAction()} type="button">Cancelar</button>
          <button type="submit">Guardar</button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
