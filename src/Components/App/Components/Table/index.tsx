import React from "react"
import "./style.scss"
import { TableProps, TableState } from "./table.types"
import { useDispatch } from "react-redux"
import { Button, ButtonGroup } from "@material-ui/core"
import { changeTableStatus } from "../../../../Redux/Reducers/Tables/table.actions"

const Table: React.FC<TableProps> = (props: TableProps) => {
  const dispatch = useDispatch()

  const setTableStatus = (table: TableProps, state: TableState) => {
    dispatch(changeTableStatus({...table, state: state}))
  }

  return (
    <div className="table-info-wapper">
      <span>id: {props.id}</span>
      <span>bill id: {props.bill}</span>
      <span>state: {props.state}</span>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button
          variant={props.state === "available" ? "contained" : "text"}
          onClick={() => setTableStatus(props, "available")}
          disabled={props.state === "available"}
        >Disponible</Button>
        <Button
          variant={props.state === "occupied" ? "contained" : "text"}
          onClick={() => setTableStatus(props, "occupied")}
          disabled={props.state === "occupied"}
        >Ocupada</Button>
        <Button
          variant={props.state === "reserved" ? "contained" : "text"}
          onClick={() => setTableStatus(props, "reserved")}
          disabled={props.state === "reserved"}
        >Reservada</Button>
      </ButtonGroup>
    </div>
  )
}

export default Table
