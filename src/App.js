import React from "react";
import { Routes, Route } from "react-router-dom";
import BudgetFormRoute from "./routes/BudgetFormRoute";
import BudgetTableRoute from "./routes/BudgetTableRoute";
import Redirect from "./components/Redirect";
import Layout from "./layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Redirect />} />
        <Route path="/dashboard/form" element={<BudgetFormRoute />} />
        <Route path="/dashboard/list" element={<BudgetTableRoute />} />
        <Route path="/dashboard/form/:id" element={<BudgetFormRoute />} />
      </Routes>
    </Layout>
  );
};

export default App;
