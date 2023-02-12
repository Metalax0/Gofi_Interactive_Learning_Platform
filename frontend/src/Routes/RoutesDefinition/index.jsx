// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Error from "../../Pages/Error";
// import Home from "../../Pages/Home";
// import Landing from "../../Pages/Landing";
// import Login from "../../Pages/Login";
// import Register from "../../Pages/Register";
// import ProtectedRoutes from "../ProtectedRoutes";

// export default function RoutesDefinition() {
//     return (
//         <div>
//                 <Routes>
//                     {/* Unprotected Routes - Access without verification */}
//                     <Route path="/" element={<Landing />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="*" element={<Error />} />

//                     {/* Protected Routes - Access with verification */}
//                     <ProtectedRoutes path="/home" element={<Home />} />
//                 </Routes>
//         </div>
//     );
// }

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../../Pages/Error";
import Home from "../../Pages/Home";
import Landing from "../../Pages/Landing";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import ProtectedRoutes from "../ProtectedRoutes";

export default function RoutesDefinition() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
