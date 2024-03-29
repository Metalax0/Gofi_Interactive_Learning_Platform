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
import TutorialCSS from "../../Pages/Tutorial/CSS";
import TutorialJS from "../../Pages/Tutorial/JS";
import CreatePost from "../../Pages/Forum/CreatePost";
import ViewAllPost from "../../Pages/Forum/ViewAllPost";
import MyPosts from "../../Pages/Forum/MyPosts";
import { TestHTML } from "../../Pages/Test/HTML";
import { TestCSS } from "../../Pages/Test/CSS";
import { TestJS } from "../../Pages/Test/JS";
import Guest from "../../Pages/Guest";
import AdminManage from "../../Pages/Admin/Manage";
import ManageUsers from "../../Pages/Admin/Users";
import ManageForum from "../../Pages/Admin/Forum";
import TutorialProblemSolving from "../../Pages/Tutorial/ProblemSolving";

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
                    path="/forum"
                    element={
                        <ProtectedRoutes>
                            <Forum />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/forum/create"
                    element={
                        <ProtectedRoutes>
                            <CreatePost />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/forum/browse"
                    element={
                        <ProtectedRoutes>
                            <ViewAllPost />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/forum/view"
                    element={
                        <ProtectedRoutes>
                            <MyPosts />
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
                    path="/tutorial/css"
                    element={
                        <ProtectedRoutes>
                            <TutorialCSS />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/tutorial/js"
                    element={
                        <ProtectedRoutes>
                            <TutorialJS />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/tutorial/problemsolving"
                    element={
                        <ProtectedRoutes>
                            <TutorialProblemSolving />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/test/html"
                    element={
                        <ProtectedRoutes>
                            <TestHTML />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/test/css"
                    element={
                        <ProtectedRoutes>
                            <TestCSS />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/test/js"
                    element={
                        <ProtectedRoutes>
                            <TestJS />
                        </ProtectedRoutes>
                    }
                />

                {/* ADMIN ROUTES */}
                <Route
                    path="/admin/manage"
                    element={
                        <AdminRoutes>
                            <AdminManage />
                        </AdminRoutes>
                    }
                />

                <Route
                    path="/admin/manage/home"
                    element={
                        <AdminRoutes>
                            <AdminManage />
                        </AdminRoutes>
                    }
                />

                <Route
                    path="/admin/manage/user"
                    element={
                        <AdminRoutes>
                            <ManageUsers />
                        </AdminRoutes>
                    }
                />

                <Route
                    path="/admin/manage/forum"
                    element={
                        <AdminRoutes>
                            <ManageForum />
                        </AdminRoutes>
                    }
                />

                {/* GUEST ROUTES */}
                <Route path="/guest" element={<Guest />} />

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
