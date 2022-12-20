import React from "react";
import TestProject from "./component/graphql-component/TestProject";
import { SumActual, SumCost } from "./component/graphql-component/TestProject";

const AppTest = () => {
  return (
    <div>
      apptest
      <SumActual />
      <SumCost />
    </div>
  );
};

export default AppTest;
