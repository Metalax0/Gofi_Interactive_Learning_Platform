import { HighlightOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { handleAddHtmlChapter } from "../../../Functions/handleAddHtmlChapter";
import AdminSidebar from "../../../Components/AdminSidebar";
import "./style.css";

const cookies = new Cookies();

export default function AdminManage() {
    const APIURL = useSelector((state) => state.global.addhtmlchapter);

    const handleSubmit = async (value) => {
        const dummyData = {
            title: "New Chapter Title",
            body: [
                {
                    content: "New chapter content",
                    type: "paragraph",
                },
            ],
        };
        const config = {
            method: "post",
            url: APIURL,
            data: dummyData,
        };

        handleAddHtmlChapter(config);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="admin-manage">
            <div className="admin-manage-container">
                <AdminSidebar activeSidebar={0} />
                <div className="admin-manage-body">
                    <h1>GOFI Management</h1>
                    <p className="admin-manage-p">
                        Welcome to management page. If you can see this then it
                        means you are either an admin or somehow got access to
                        this page. As an Admin of GOFI, you have the following
                        permissions :
                    </p>

                    <ul>
                        <li>
                            <b>Manage Users - </b> Remove users from the
                            database.
                        </li>
                        <li>
                            <b>Manage Forum - </b>
                            Remove forum posts from the database.
                        </li>
                    </ul>

                    <p className="admin-manage-p">
                        As of now, admins of the site will have above two
                        privileges and they are fit to exercise them when
                        appropriate.
                    </p>
                </div>
            </div>
        </div>
    );
}
