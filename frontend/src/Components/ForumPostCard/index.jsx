import { Button, Collapse, Input } from "antd";
import { handleAddComment } from "../../Functions/handleAddComment";
import { CommentOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./style.css";

const { Panel } = Collapse;

export default function ForumPostCard({
    post,
    totalComments,
    totalPoints,
    getAllPostData,
    addCommentURL,
}) {
    const [commentInput, setcommentInput] = useState("");
    const { title, body, category, datePosted, comments } = post;

    const dateObj = new Date(datePosted);
    const formattedDate = dateObj.toISOString().substring(0, 10);
    const categoryStyle = { backgroundColor: "" };

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

    return (
        <div className="forum-post">
            <div className="forum-post__likes">
                <button>&#8593;</button>
                <label className="forum-post__likes-count">{totalPoints}</label>
                <button>&#8595;</button>
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
                    {/* <Collapse className="view-all-post-collapse" key={i}>
                        <Panel
                            header={
                                <ForumPostCard
                                    key={i}
                                    post={post}
                                    totalComments={totalComments}
                                    totalPoints={totalPoints}
                                    category={post.category}
                                />
                            }
                        >
                            <div className="view-all-post__comments">
                                <div className="view-all-post__comments__write">
                                    <Input
                                        size="large"
                                        placeholder="Write Your Comment"
                                        prefix={<CommentOutlined />}
                                        onChange={(e) =>
                                            setcommentInput(e.target.value)
                                        }
                                    />
                                    <Button
                                        type="primary"
                                        onClick={() => handleCommentSubmit(i)}
                                    >
                                        Comment
                                    </Button>
                                </div>
                                <div className="view-all-post__comments__view">
                                    {post.comments
                                        ? [...post.comments]
                                              .reverse()
                                              .map((comment, j) => (
                                                  <div
                                                      className="view-all-post__comments__view__comment"
                                                      key={j}
                                                  >
                                                      <small>
                                                          {new Date(
                                                              comment.datePublished
                                                          )
                                                              .toISOString()
                                                              .substring(0, 10)}
                                                      </small>
                                                      <img
                                                          src={
                                                              comment.author_id
                                                                  .profileImg
                                                          }
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
                                </div>
                            </div>
                        </Panel>
                    </Collapse> */}
                </div>
            </div>
        </div>
        //
        // <div className="all-post">
        //     <div className="all-post__stats">
        //         <label className="all-post__stats__author">
        //             <small>
        //                 <i>{post.author.fullName.split(" ")[0]}</i>
        //             </small>
        //             <br></br>
        //             <small>
        //                 <i>{formattedDate}</i>
        //             </small>
        //         </label>
        //         <label>{totalComments} Comments</label>
        //         <label>{totalPoints} Points</label>
        //         <label>{category}</label>
        //     </div>
        //     <div className="all-post__content">
        //         <div className="all-post__content_top">
        //             <label>
        //                 <b>{post.title}</b>
        //             </label>
        //             <label>{post.body}</label>
        //         </div>
        //         <label>#{post.tag}</label>
        //     </div>
        // </div>
    );
}
