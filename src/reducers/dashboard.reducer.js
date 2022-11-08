import { ACTION_TYPES } from "../actionTypes";
import { newBoard, updatedArrayValues } from "../utils";

export function addQuery(state, action) {
  const { budget } = state;
  let newAddedBoard = [];
  newAddedBoard.push(newBoard(action.payload.data));
  return [...budget, ...newAddedBoard];
}

export function deleteQuery(state, action) {
  const { budget } = state;
  let filteredBoardArray = budget.filter(
    (item) => item.id !== action.payload.id
  );
  return [...filteredBoardArray];
}

export function updateQuery(state, action) {
  const { budget } = state;
  return updatedArrayValues(budget, action.payload);
}

function dashBoardReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return {
        ...state,
        budget: addQuery(state, action),
      };
    case ACTION_TYPES.DELETE:
      return {
        ...state,
        budget: deleteQuery(state, action),
      };
    case ACTION_TYPES.EDIT:
      return {
        ...state,
        budget: updateQuery(state, action),
      };
    default:
      return state;
  }
}

export default dashBoardReducer;
