export const initialState = {
  name: "",
  desc: "",
  type: "",
  period: "",
  startDate: "",
  endDate: "",
  scope: "",
  budgetStatus: {
    cost: "",
    budget: "",
  },
  comments: {
    title: "",
    text: "",
  },
  actions: [],
};

export const OPTIONS1 = [
  {
    value: "DBU",
    label: "DBU",
  },
  {
    value: "DBU1",
    label: "DBU1",
  },
  {
    value: "DBU2",
    label: "DBU2",
  },
];

export const OPTIONS2 = [
  {
    value: "monthly",
    label: "MONTHLY",
  },
  {
    value: "yearly",
    label: "YEARLY",
  },
  {
    value: "quarterly",
    label: "Quarterly",
  },
];

export const OPTIONS3 = [
  {
    value: "local",
    label: "LOCAL",
  },
  {
    value: "global",
    label: "GLOBAL",
  },
  {
    value: "workspaces",
    label: "WORKSPACES",
  },
];

export const OPTIONS4 = [
  {
    value: "ok",
    label: "Ok",
  },
  {
    value: "exceeded",
    label: "Exceeded",
  },
  {
    value: "At risk",
    label: "At Risk",
  },
];


export const OPTIONS5 = [
    {
      value: "OPTIMIZE",
      label: "OPTIMIZE",
    },
    {
      value: "CHARGEBACK",
      label: "CHARGEBACK",
    },
    {
      value: "TRENDS",
      label: "TRENDS",
    },
  ];