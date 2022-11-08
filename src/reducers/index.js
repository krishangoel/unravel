import combineReducers from 'react-combine-reducers';
import dashboardReducer from "./dashboard.reducer"
import { MockData } from "../mock/data"

const initialData = {
    budget:[...MockData.budgetList],
  }

  const [dashbaordReducer, initialBudgetState] = combineReducers({
    dashbaord: [dashboardReducer, initialData],
  });


  export { dashbaordReducer, initialBudgetState}