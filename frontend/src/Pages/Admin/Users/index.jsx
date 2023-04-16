import React from "react";
import AdminSidebar from "../../../Components/AdminSidebar";
import "./style.css";

export default function ManageUsers() {
    return (
        <div className="admin-manage">
            <div className="admin-manage-container">
                <AdminSidebar activeSidebar={2} />
                <div className="admin-manage-body">
                    <h1>MANAGE USERS</h1>
                </div>
            </div>
        </div>
    );
}
