import React, {createContext, useReducer} from "react";

import { dashbaordReducer, initialBudgetState } from "../reducers"

const Store = ({children}) => {
    const [state, dispatch] = useReducer(dashbaordReducer, initialBudgetState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialBudgetState);
export default Store;

  