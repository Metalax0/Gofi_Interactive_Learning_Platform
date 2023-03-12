import React from "react";
import "./style.css";

export default function ForumPostCard({
    post,
    totalComments,
    totalPoints,
    category,
}) {
    const dateObj = new Date(post.datePosted);
    const formattedDate = dateObj.toISOString().substring(0, 10);
    return (
        <div className="all-post">
            <div className="all-post__stats">
                <label className="all-post__stats__author">
                    <small>
                        <i>{post.author.fullName.split(" ")[0]}</i>
                    </small>
                    <br></br>
                    <small>
                        <i>{formattedDate}</i>
                    </small>
                </label>
                <label>{totalComments} Comments</label>
                <label>{totalPoints} Points</label>
                <label>{category}</label>
            </div>
            <div className="all-post__content">
                <div className="all-post__content_top">
                    <label>
                        <b>{post.title}</b>
                    </label>
                    <label>{post.body}</label>
                </div>
                <label>#{post.tag}</label>
            </div>
        </div>
    );
}
