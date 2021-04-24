import React from "react"
import "./style.scss"
import { useSelector } from "react-redux"
import Table from "../../Components/Table"
import { tablesSelector } from "../../../../Redux/Reducers/Tables/tables.selectors"

const Home: React.FC = () => {
  const tables = useSelector(tablesSelector, () => false)

  return (
    <div className="main-wrapper">
      <div>
        {tables.map((table) => (
          <Table key={table.id} id={table.id} bill={table.bill} state={table.state}></Table>
        ))}
      </div>
    </div>
  )
}

export default Home
