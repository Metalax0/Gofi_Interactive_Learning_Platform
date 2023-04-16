import React, { useEffect, useState } from "react";
import "./style.css";
import AdminSidebar from "../../../Components/AdminSidebar";
import ViewAllPost from "../../Forum/ViewAllPost";
import Search from "antd/es/transfer/search";
import { Select } from "antd";
import ForumPostCard from "../../../Components/ForumPostCard";
import { useSelector } from "react-redux";
import { handleGetAllPost } from "../../../Functions/handleGetAllPost";

export default function ManageForum() {
    const [allPostData, setallPostData] = useState([]);
    const [allPostDataFiltered, setallPostDataFiltered] = useState([]);
    const getAllPostURL = useSelector((state) => state.global.getAllPostURL);
    const addCommentURL = useSelector((state) => state.global.addCommentURL);

    useEffect(() => {
        getAllPostData();
    }, []);

    const getAllPostData = () => {
        const config = {
            method: "get",
            url: getAllPostURL,
        };
        handleGetAllPost(config).then((res) => {
            setallPostData(res.data);
            setallPostDataFiltered(res.data);
        });
    };

    const onSearchTitle = (value) => {
        const filteredData = allPostData.filter((post) => {
            return post.title.includes(value);
        });
        setallPostDataFiltered(filteredData);
    };

    const onSearchTag = (value) => {
        const filteredData = allPostData.filter((post) => {
            return post.tag.includes(value);
        });
        setallPostDataFiltered(filteredData);
    };

    const onFilterCategory = (value) => {
        if (value === "All") setallPostDataFiltered(allPostData);
        else {
            const filteredData = allPostData.filter((post) => {
                return post.category.includes(value);
            });
            setallPostDataFiltered(filteredData);
        }
    };

    return (
        <div className="admin-manage">
            <div className="admin-manage-container">
                <AdminSidebar activeSidebar={1} />
                <div className="admin-manage-body">
                    {/* <h1>MANAGE FORUM</h1> */}
                    <div className="view-all-post__container-admin">
                        <div className="view-all-post__top">
                            <Search
                                placeholder="Search Post"
                                onSearch={onSearchTitle}
                                enterButton
                                size="medium"
                                style={{ width: "35%" }}
                            />
                            <Search
                                placeholder="Search Tag"
                                onSearch={onSearchTag}
                                enterButton
                                size="medium"
                                style={{ width: "35%" }}
                            />
                            <Select
                                defaultValue="All"
                                size="medium"
                                style={{ width: "20%" }}
                                onChange={onFilterCategory}
                                options={[
                                    { value: "All", label: "All" },
                                    { value: "General", label: "General" },
                                    { value: "HTML", label: "HTML" },
                                    { value: "CSS", label: "CSS" },
                                    {
                                        value: "JavaScript",
                                        label: "JavaScript",
                                    },
                                ]}
                            />
                        </div>
                        <div className="view-all-post__post-collection">
                            {[...allPostDataFiltered]
                                .reverse()
                                .map((post, i) => {
                                    const totalComments = post.comments.length;
                                    return (
                                        <ForumPostCard
                                            key={i}
                                            post={post}
                                            totalComments={totalComments}
                                            getAllPostData={getAllPostData}
                                            addCommentURL={addCommentURL}
                                            enablePostDelete={true}
                                            enableCommentDelete={true}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
