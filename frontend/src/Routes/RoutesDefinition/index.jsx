import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Landing from "../../Pages/Landing";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Tutorial from "../../Pages/Tutorial";
import Test from "../../Pages/Test";
import Forum from "../../Pages/Forum";
import Profile from "../../Pages/Profile";
import ProtectedRoutes from "../ProtectedRoutes";
import TutorialHTML from "../../Pages/Tutorial/HTML";

export default function RoutesDefinition() {
    return (
        <>
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
