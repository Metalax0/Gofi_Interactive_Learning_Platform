import { Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import ForumPostCard from "../../../Components/ForumPostCard";
import ForumSidebar from "../../../Components/ForumSidebar";
import { handleGetAllAuthorPost } from "../../../Functions/handleGetAllAuthorPost";
import "./style.css";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const cookies = new Cookies();

export default function MyPosts() {
    const [allPostData, setallPostData] = useState([]);
    const [allPostDataFiltered, setallPostDataFiltered] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const userType = cookies.get("USERTYPE");

    const getAllAuthorPostDataURL = useSelector(
        (state) => state.global.getAllAuthorPostURL
    );
    const addCommentURL = useSelector((state) => state.global.addCommentURL);

    useEffect(() => {
        getAllAuthorPostData();
    }, []);

    useEffect(() => {
        if (userType === "guest") {
            setIsModalOpen(true);

            if (document.querySelector(".view-all-post"))
                document.querySelector(".view-all-post").style.filter =
                    "blur(10px)";
        }
    });

    const getAllAuthorPostData = () => {
        const userID = cookies.get("USERID");

        const config = {
            method: "get",
            url: getAllAuthorPostDataURL,
            params: { authorID: userID },
        };

        handleGetAllAuthorPost(config).then((res) => {
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
        <div className="view-all-post">
            <Modal
                title="Feature Unavailable For Guest Account"
                open={isModalOpen}
                onOk={() => navigate("signup")}
                onCancel={() => navigate("/login")}
                okText="Sign Up"
                cancelText="Login"
                closeIcon={<></>}
                maskClosable={false}
                maskStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                centered
            >
                <p>
                    This feature is not available for Guest Accounts. To access
                    this, either login from your gofi account or create new
                    account.
                </p>
            </Modal>
            <ForumSidebar activeSidebar={2} />
            <div className="view-all-post__container">
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
                            { value: "JavaScript", label: "JavaScript" },
                        ]}
                    />
                </div>
                <div className="view-all-post__post-collection">
                    {[...allPostDataFiltered].reverse().map((post, i) => {
                        const totalComments = post.comments.length;
                        return (
                            <ForumPostCard
                                key={i}
                                post={post}
                                totalComments={totalComments}
                                getAllPostData={getAllAuthorPostData}
                                addCommentURL={addCommentURL}
                                enablePostDelete={true}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
