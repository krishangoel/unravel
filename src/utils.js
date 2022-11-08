export function newBoard(args) {
  return { id: Date.now(), ...args };
}

export const updatedArrayValues = (arr, payload) => {
  const { id, data } = payload;
  const filterArr = arr.filter((item) => Number(item.id) !== Number(id));
  return [data, ...filterArr];
};

export const getProgressPercentage = (arg1, arg2) => {
  return Math.round((100 * arg2) / arg1,1);
};
