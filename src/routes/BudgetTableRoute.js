import React, { useState } from "react";
import Table from "../components/Table";
import Header from "../components/Header";

const BudgetTableRoute = (props) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearch={setSearch} />
      <Table {...props} search={search} />
    </>
  );
};

export default BudgetTableRoute;
