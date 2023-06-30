import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";
const DashLayout = () => {
  return (
    <>
      <DashHeader></DashHeader>
      <div className="dash-container">
        <Outlet></Outlet>
      </div>
      <DashFooter></DashFooter>
    </>
  );
};

export default DashLayout;
