import { Button, Collapse, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ForumPostCard from "../../../Components/ForumPostCard";
import { handleGetAllPost } from "../../../Functions/handleGetAllPost";
import "./style.css";

const { Panel } = Collapse;
const { Search } = Input;

export default function ViewAllPost() {
    const [allPostData, setallPostData] = useState([]);
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
        handleGetAllPost(config).then((res) => setallPostData(res.data));
    };

    const onSearch = (value) => {
        console.log("search value", value);
    };

    return (
        <div className="view-all-post">
            <div className="view-all-post__container">
                <div className="view-all-post__top">
                    <Search
                        placeholder="Search Post"
                        onSearch={onSearch}
                        enterButton
                        size="medium"
                        style={{ width: "35%" }}
                    />
                    <Search
                        placeholder="Search Tag"
                        onSearch={onSearch}
                        enterButton
                        size="medium"
                        style={{ width: "35%" }}
                    />
                    <Select
                        defaultValue="All"
                        size="medium"
                        style={{ width: "20%" }}
                        options={[
                            { value: "All", label: "All" },
                            { value: "General", label: "General" },
                            { value: "HTML", label: "HTML" },
                            { value: "CSS", label: "CSS" },
                            { value: "JavaScript", label: "JavaScript" },
                        ]}
                    />
                </div>
                <div className="view-all-post__post-collection">
                    {allPostData.map((post, i) => {
                        const totalComments = post.comments.length;
                        return (
                            <ForumPostCard
                                key={i}
                                post={post}
                                totalComments={totalComments}
                                getAllPostData={getAllPostData}
                                addCommentURL={addCommentURL}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
