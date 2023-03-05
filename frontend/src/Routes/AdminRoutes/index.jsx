import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AdminRoutes = ({ children }) => {
    const userType = cookies.get("USERTYPE");
    let location = useLocation();
    console.log("USERTYPE", userType);
    if (userType === "admin") return children;
    else return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
