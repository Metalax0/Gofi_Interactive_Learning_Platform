import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ProtectedRoutes = ({ children }) => {
    const token = cookies.get("TOKEN");
    let location = useLocation();
    console.log(token);
    if (!token)
        return <Navigate to="/login" state={{ from: location }} replace />;
    return children;
};

export default ProtectedRoutes;
