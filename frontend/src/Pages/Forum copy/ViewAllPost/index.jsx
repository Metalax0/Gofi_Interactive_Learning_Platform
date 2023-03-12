import { Button, Collapse, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ForumPostCard from "../../../Components/ForumPostCard";
import { handleGetAllPost } from "../../../Functions/handleGetAllPost";
import { handleAddComment } from "../../../Functions/handleAddComment";
import { CommentOutlined } from "@ant-design/icons";
import "./style.css";

const { Panel } = Collapse;

export default function ViewAllPost() {
    const [allPostData, setallPostData] = useState([]);
    const [commentInput, setcommentInput] = useState("");
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

    const handleCommentSubmit = async (i) => {
        const postID = allPostData[i]._id;
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

    return allPostData.map((post, i) => {
        const totalComments = post.comments.length;
        const totalPoints = post.likes.length;
        return (
            <Collapse className="view-all-post" key={i}>
                <Panel
                    header={
                        <ForumPostCard
                            key={i}
                            post={post}
                            totalComments={totalComments}
                            totalPoints={totalPoints}
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
            </Collapse>
        );
    });
}
