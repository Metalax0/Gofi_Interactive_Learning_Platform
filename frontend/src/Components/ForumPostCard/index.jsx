import { Button, Collapse, Input, message, Popconfirm } from "antd";
import { handleAddComment } from "../../Functions/handleAddComment";
import { CommentOutlined, DeleteFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { handleAddLikeToPost } from "../../Functions/handleAddLikeToPost";
import Cookies from "universal-cookie";

const { Panel } = Collapse;
const cookies = new Cookies();

export default function ForumPostCard({
    post,
    getAllPostData,
    addCommentURL,
    enablePostDelete = false,
    enableCommentDelete = false,
}) {
    const addLikeToPostURL = useSelector(
        (state) => state.global.addLikeToPostURL
    );

    const deletePostURL = useSelector((state) => state.global.deletePostURL);
    const deleteCommentURL = useSelector(
        (state) => state.global.deleteCommentURL
    );

    const [commentInput, setcommentInput] = useState("");
    const [likeBttnColor, setlikeBttnColor] = useState("grey");

    const { title, body, category, datePosted, comments, author, likes } = post;
    const dateObj = new Date(datePosted);
    const formattedDate = dateObj.toISOString().substring(0, 10);
    const categoryStyle = { backgroundColor: "" };
    const userType = cookies.get("USERTYPE");
    console.log(userType);

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

    const postConfirm = async (e) => {
        console.log("delete post");
        const postID = post._id;

        const config = {
            method: "post",
            url: deletePostURL,
            data: {
                postID,
            },
        };

        await handleAddLikeToPost(config);
        getAllPostData();
        message.success("Post Deleted Successfully");
    };

    const postCancel = (e) => {
        console.log(e);
        message.error("Post Deletion Was Canceled");
    };

    const commentConfirm = async (index) => {
        console.log("delete comment", index);
        const postID = post._id;

        const config = {
            method: "post",
            url: deleteCommentURL,
            data: {
                postID,
                commentIndex: index,
            },
        };

        await handleAddLikeToPost(config);
        getAllPostData();
        message.success("Comment Deleted Successfully");
    };

    const commentCancel = (e) => {
        console.log(e);
        message.error("Commend Deletion Was Canceled");
    };

    return (
        <div className="forum-post">
            <div className="forum-post__likes">
                {enablePostDelete && (
                    <button
                        style={{ backgroundColor: "#eb664b", color: "black" }}
                    >
                        <Popconfirm
                            title="Delete Post?"
                            description="Are you sure to delete this post?"
                            onConfirm={postConfirm}
                            onCancel={postCancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteFilled style={{ fontSize: "0.9rem" }} />
                        </Popconfirm>
                    </button>
                )}
                <button
                    style={{ color: likeBttnColor }}
                    onClick={handleAddLike}
                    disabled={
                        userType === "guest"
                            ? true
                            : false || enablePostDelete || enableCommentDelete
                    }
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
                    <div className="forum-post-info__tags">
                        {post.tag.split(" ").map((tag, i) => (
                            <i key={i}>#{tag} &nbsp;</i>
                        ))}
                    </div>
                    <div className="forum-post-info__stats">
                        <div className="forum-post-info__author_details">
                            <img
                                src={post.author.user_id.profileImg}
                                alt="user Img"
                            ></img>
                            <label>{post.author.fullName.split(" ")[0]}</label>
                        </div>
                        <div className="forum-post-info__date">
                            <small>{formattedDate}</small>
                        </div>
                    </div>
                </div>
                <br />
                <div className="forum-post__content__comments">
                    <Collapse
                        className="forum-post__content__comments__collapse"
                        size="small"
                    >
                        <Panel
                            className="forum-post__content__comments__collapse-header"
                            header={"Comments (" + comments.length + ")"}
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
                                    disabled={
                                        userType === "guest"
                                            ? true
                                            : false ||
                                              enablePostDelete ||
                                              enableCommentDelete
                                    }
                                />
                                <Button
                                    type="primary"
                                    onClick={() => handleCommentSubmit()}
                                    disabled={
                                        userType === "guest"
                                            ? true
                                            : false ||
                                              enablePostDelete ||
                                              enableCommentDelete
                                    }
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
                                          {enableCommentDelete && (
                                              <button
                                                  style={{
                                                      backgroundColor:
                                                          "#eb664b",
                                                      color: "black",
                                                  }}
                                              >
                                                  <Popconfirm
                                                      title="Delete Comment?"
                                                      description="Are you sure to delete this comment?"
                                                      onConfirm={() =>
                                                          commentConfirm(
                                                              comments.length -
                                                                  j -
                                                                  1
                                                          )
                                                      }
                                                      onCancel={commentCancel}
                                                      okText="Yes"
                                                      cancelText="No"
                                                  >
                                                      <DeleteFilled
                                                          style={{
                                                              fontSize:
                                                                  "0.9rem",
                                                          }}
                                                      />
                                                  </Popconfirm>
                                              </button>
                                          )}
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
                                              <b>
                                                  <i>
                                                      {
                                                          comment.authorName.split(
                                                              " "
                                                          )[0]
                                                      }
                                                  </i>{" "}
                                              </b>
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
