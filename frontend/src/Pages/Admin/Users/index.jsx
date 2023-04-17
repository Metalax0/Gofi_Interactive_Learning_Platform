import React, { useEffect, useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar";
import "./style.css";
import { useSelector } from "react-redux";
import { handleGetAllAuthorPost } from "../../../Functions/handleGetAllAuthorPost";
import { DeleteFilled } from "@ant-design/icons";
import { handleDeletePost } from "../../../Functions/handleDeletePost";
import { message, Popconfirm } from "antd";

export default function ManageUsers() {
    const [allUsersData, setallUsersData] = useState([]);
    const getAllUserDataURL = useSelector(
        (state) => state.global.getAllUserDataURL
    );
    const deleteUserURL = useSelector((state) => state.global.deleteUserURL);

    useEffect(() => {
        const config = {
            method: "get",
            url: getAllUserDataURL,
        };

        handleGetAllAuthorPost(config).then((res) => {
            console.log(res.data);
            setallUsersData(res.data);
        });
    });

    const confirm = async (userID) => {
        console.log("delete user DOES NOT WORK CURRENTLY");
        console.log(userID);

        const config = {
            method: "post",
            url: deleteUserURL,
            data: {
                userID,
            },
        };

        const deleteStatus = await handleDeletePost(config);
        deleteStatus
            ? message.success("User Deleted Successfully")
            : message.error("User Deletion Failed");
    };

    const cancel = () => {
        message.error("User Deletion Was Canceled");
    };

    return (
        <div className="admin-manage">
            <div className="admin-manage-container">
                <AdminSidebar activeSidebar={2} />
                <div className="admin-manage-body-users-list">
                    {allUsersData.map((user, key) => {
                        return (
                            <div className="admin-manage-user" key={key}>
                                <button
                                    style={{
                                        backgroundColor: "#eb664b",
                                        color: "black",
                                    }}
                                >
                                    <Popconfirm
                                        title="Delete Post?"
                                        description="Are you sure to delete this post?"
                                        onConfirm={() => confirm(user._id)}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <DeleteFilled
                                            style={{ fontSize: "0.9rem" }}
                                        />
                                    </Popconfirm>
                                </button>
                                <img
                                    src={user.profileImg}
                                    alt="user Img"
                                    className="admin-manage-user-img"
                                ></img>
                                <div className="admin-manage-user-details">
                                    <label>{user.fullName}</label>
                                    <br />
                                    <small>({user._id})</small>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
