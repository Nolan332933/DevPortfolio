"use client";
import Dashboard from "./Dashboard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardLoading from "./DashboardLoading";

const page = () => {
  const [dashboardData, setDashboardData] = useState([]);

  const getDashboardData = async () => {
    const res = await axios.get("/api/dashboard");
    if (res.status == 200) {
      setDashboardData(res.data.data);
    }
  };
  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="text-slate-700">
      Welcome, Admin
      {dashboardData.length !== 0 ? (
        <Dashboard dashboardData={dashboardData} />
      ) : (
        <DashboardLoading />
      )}
    </div>
  );
};

export default page;
