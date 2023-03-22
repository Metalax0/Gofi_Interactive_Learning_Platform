import { Button, Collapse, Input } from "antd";
import { handleAddComment } from "../../Functions/handleAddComment";
import { CommentOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { handleAddLikeToPost } from "../../Functions/handleAddLikeToPost";

const { Panel } = Collapse;

export default function ForumPostCard({ post, getAllPostData, addCommentURL }) {
    const addLikeToPostURL = useSelector(
        (state) => state.global.addLikeToPostURL
    );

    const [commentInput, setcommentInput] = useState("");
    const [likeBttnColor, setlikeBttnColor] = useState("grey");

    const { title, body, category, datePosted, comments, author, likes } = post;
    const dateObj = new Date(datePosted);
    const formattedDate = dateObj.toISOString().substring(0, 10);
    const categoryStyle = { backgroundColor: "" };

    useEffect(() => {
        const userID = JSON.parse(localStorage.getItem("activeUser")).userID;
        if (post.likes.length === 0) setlikeBttnColor("grey");
        else
            post.likes.map((data) => {
                if (data._id === userID) {
                    setlikeBttnColor("red");
                } else {
                    setlikeBttnColor("grey");
                }
            });
    }, [post.likes]);

    switch (post.category) {
        case "General":
            categoryStyle.backgroundColor = "#a5ff81";
            break;

        case "HTML":
            categoryStyle.backgroundColor = "#ff8181";
            break;

        case "CSS":
            categoryStyle.backgroundColor = "#81ecff";
            break;

        case "JavaScript":
            categoryStyle.backgroundColor = "#e4ff81";
            break;

        default:
            break;
    }

    const handleCommentSubmit = async () => {
        const postID = post._id;
        const authorName = JSON.parse(
            localStorage.getItem("activeUser")
        ).fullName;
        const authorID = JSON.parse(localStorage.getItem("activeUser")).userID;
        // axios call
        const config = {
            method: "post",
            url: addCommentURL,
            data: {
                postID,
                authorID,
                authorName,
                commentInput,
            },
        };

        const isCommentAdded = await handleAddComment(config);
        if (isCommentAdded) getAllPostData();
    };

    const handleAddLike = async () => {
        const postID = post._id;
        const userID = JSON.parse(localStorage.getItem("activeUser")).userID;

        const config = {
            method: "post",
            url: addLikeToPostURL,
            data: {
                postID,
                userID,
            },
        };

        await handleAddLikeToPost(config);
        getAllPostData();
    };

    return (
        <div className="forum-post">
            <div className="forum-post__likes">
                <button
                    style={{ color: likeBttnColor }}
                    onClick={handleAddLike}
                >
                    &#10084;
                </button>
                <label className="forum-post__likes-count">
                    {post.likes.length}
                </label>
            </div>
            <div className="forum-post__content">
                <label
                    className="forum-post__content__category"
                    style={categoryStyle}
                >
                    <small>{category}</small>
                </label>
                <div className="forum-post__content__title">
                    <label>{title}</label>
                </div>
                <div className="forum-post__content__body">
                    <p>{body}</p>
                </div>
                <div className="forum-post__content__info">
                    <div className="forum-post__content__info"></div>
                </div>
                <div className="forum-post__content__comments">
                    <Collapse
                        className="forum-post__content__comments__collapse"
                        size="small"
                    >
                        <Panel
                            className="forum-post__content__comments__collapse-header"
                            header="Comments"
                            size="small"
                        >
                            <div className="forum-post__content__comments__write">
                                <Input
                                    size="medium"
                                    placeholder="Write Your Comment"
                                    prefix={<CommentOutlined />}
                                    onChange={(e) =>
                                        setcommentInput(e.target.value)
                                    }
                                />
                                <Button
                                    type="primary"
                                    onClick={() => handleCommentSubmit()}
                                >
                                    Comment
                                </Button>
                            </div>
                            <br />
                            {comments
                                ? [...comments].reverse().map((comment, j) => (
                                      <div
                                          className="view-all-post__comments__view__comment"
                                          key={j}
                                      >
                                          <small>
                                              {new Date(comment.datePublished)
                                                  .toISOString()
                                                  .substring(0, 10)}
                                          </small>
                                          <img
                                              src={comment.author_id.profileImg}
                                              alt="user Img"
                                          ></img>
                                          <label>
                                              <i>
                                                  {
                                                      comment.authorName.split(
                                                          " "
                                                      )[0]
                                                  }
                                              </i>{" "}
                                              -{" "}
                                          </label>
                                          <p>{comment.body}</p>
                                      </div>
                                  ))
                                : null}
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}
