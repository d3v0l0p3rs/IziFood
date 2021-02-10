import { TablesActions, TablesState, TablesTypes } from "./tables.types"

const initialState: TablesState = {
  tables: [
    {
      id: 1,
      bill: 1,
      state: "available",
    }, {
      id: 2,
      bill: 2,
      state: "occupied",
    }, {
      id: 3,
      bill: 3,
      state: "reserved",
    },
  ],
}


export default function tablesReducer(
  state: TablesState = initialState,
  action: TablesActions,
): TablesState {
  switch (action.type) {
    case TablesTypes.CHANGE_TABLE_STATUS: {
      return {
        ...state,
        tables: state.tables.map(
          table => table.id === action.payload.id ? {...table, state: action.payload.state} : table,
        ),
      }
    }

    default: {
      return state
    }
  }
}