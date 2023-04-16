import React from "react";
import { useNavigate } from "react-router-dom";
import {
    EditFilled,
    EyeFilled,
    UnorderedListOutlined,
} from "@ant-design/icons";
import "./style.css";

export default function AdminSidebar({ activeSidebar }) {
    const navigate = useNavigate();

    return (
        <div className="admin-sidebar">
            <div className="admin-sidebar-items">
                <button
                    onClick={() => navigate("/admin/manage/home")}
                    id={
                        activeSidebar === 0 ? "admin-sidebar-item-active" : null
                    }
                >
                    <EditFilled />
                    Home
                </button>
                <button
                    onClick={() => navigate("/admin/manage/forum")}
                    id={
                        activeSidebar === 1 ? "admin-sidebar-item-active" : null
                    }
                >
                    <UnorderedListOutlined />
                    Manage Forum
                </button>

                <button
                    onClick={() => navigate("/admin/manage/user")}
                    id={
                        activeSidebar === 2 ? "admin-sidebar-item-active" : null
                    }
                >
                    <EyeFilled />
                    Manage User
                </button>
            </div>
        </div>
    );
}
