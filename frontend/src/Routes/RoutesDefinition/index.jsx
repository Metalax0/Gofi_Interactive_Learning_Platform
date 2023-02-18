import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../../Pages/Error";
import Home from "../../Pages/Home";
import Landing from "../../Pages/Landing";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import ProtectedRoutes from "../ProtectedRoutes";

export default function RoutesDefinition() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
                path="/home"
                element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                }
            />
            <Route
                path="*"
                element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                }
            />
        </Routes>
    );
}
