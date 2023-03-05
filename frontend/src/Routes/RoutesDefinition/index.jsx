import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes";
import AdminRoutes from "../AdminRoutes";

import Home from "../../Pages/Home";
import Landing from "../../Pages/Landing";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Tutorial from "../../Pages/Tutorial";
import Test from "../../Pages/Test";
import Forum from "../../Pages/Forum";
import Profile from "../../Pages/Profile";
import TutorialHTML from "../../Pages/Tutorial/HTML";
import AdminHTMLTutorial from "../../Pages/Admin/HTMLTutorial";

export default function RoutesDefinition() {
    return (
        <>
            <Routes>
                {/* GENERAL ROUTES */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                {/* MEMBER ROUTES */}
                <Route
                    path="/home"
                    element={
                        <ProtectedRoutes>
                            <Home />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/tutorial"
                    element={
                        <ProtectedRoutes>
                            <Tutorial />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/test"
                    element={
                        <ProtectedRoutes>
                            <Test />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/Forum"
                    element={
                        <ProtectedRoutes>
                            <Forum />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoutes>
                            <Profile />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/tutorial/html"
                    element={
                        <ProtectedRoutes>
                            <TutorialHTML />
                        </ProtectedRoutes>
                    }
                />

                {/* ADMIN ROUTES */}
                <Route
                    path="/admin/htmltutorial"
                    element={
                        <AdminRoutes>
                            <AdminHTMLTutorial />
                        </AdminRoutes>
                    }
                />

                {/* ERROR/INVALID ROUTES */}
                <Route
                    path="*"
                    element={
                        <ProtectedRoutes>
                            <Home />
                        </ProtectedRoutes>
                    }
                />
            </Routes>
        </>
    );
}
