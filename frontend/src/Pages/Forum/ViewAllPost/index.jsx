import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleGetAllPost } from "../../../Functions/handleGetAllPost";
import "./style.css";

export default function ViewAllPost() {
    const getAllPostURL = useSelector((state) => state.global.getAllPostURL);
    const [allPostData, setallPostData] = useState([]);

    useEffect(() => {
        const config = {
            method: "get",
            url: getAllPostURL,
        };

        handleGetAllPost(config).then((res) => setallPostData(res.data));
    }, []);
    return allPostData.map((post, i) => {
        const totalComments = post.comments.length;
        const totalPoints = post.likes.length;
        return (
            <div className="all-post" key={i}>
                <div className="all-post__stats">
                    <label className="all-post__stats__author">
                        <small>
                            <i>{post.author.fullName.split(" ")[0]}</i>
                        </small>
                    </label>
                    <label>{totalComments} Comments</label>
                    <label>{totalPoints} Points</label>
                </div>
                <div className="all-post__content">
                    <label>
                        <b>{post.title}</b>
                    </label>
                    <label>{post.body}</label>
                </div>
            </div>
        );
    });
}
