import React from "react";
import { useNavigate } from "react-router-dom";
import {
    EditFilled,
    EyeFilled,
    UnorderedListOutlined,
} from "@ant-design/icons";
import "./style.css";

export default function ForumSidebar({ activeSidebar }) {
    const navigate = useNavigate();

    return (
        <div className="forum-sidebar">
            <div className="forum-sidebar-items">
                <button
                    onClick={() => navigate("/forum/create")}
                    id={activeSidebar === 0 ? "form-sidebar-item-active" : null}
                >
                    <EditFilled />
                    Create New Post
                </button>
                <button
                    onClick={() => navigate("/forum/browse")}
                    id={activeSidebar === 1 ? "form-sidebar-item-active" : null}
                >
                    <UnorderedListOutlined />
                    View All Post
                </button>

                <button
                    onClick={() => navigate("/forum/view")}
                    id={activeSidebar === 2 ? "form-sidebar-item-active" : null}
                >
                    <EyeFilled />
                    My Posts
                </button>
            </div>
        </div>
    );
}
