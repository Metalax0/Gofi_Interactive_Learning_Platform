import { Button, Collapse, Progress } from "antd";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const { Panel } = Collapse;

export default function ForumCard({
    headerText,
    bodyTitle,
    bodyText,
    chapterCount,
    reward,
    headerColor,
    progress,
    navigateTo,
}) {
    const cardHeaderRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        cardHeaderRef.current.style.setProperty("--bg-header", headerColor);
    }, []);

    useEffect(() => {});

    const handleChapterOneClick = () => {
        console.log(navigateTo);
        navigate(`${navigateTo}`);
    };

    return (
        <div className="forum-card" onClick={handleChapterOneClick}>
            <div className="forum-card__header" ref={cardHeaderRef}>
                <label>{headerText}</label>
            </div>
            <div className="forum-card__body">
                <label className="forum-card__body__title">{bodyTitle}</label>
                <label className="forum-card__body__text">{bodyText}</label>
            </div>
            <div className="forum-card__footer">
                <div className="forum-card__footer__difficulty">
                    <label>{reward}</label>
                </div>
                <div className="forum-card__footer__chapter-count">
                    {progress ? (
                        progress.postCount ? (
                            <>
                                <label>Total Posts - </label>
                                <label className="forum-card__progress__last-chapter">
                                    {progress.postCount}
                                </label>
                            </>
                        ) : (
                            <>
                                <label>Posts Created - </label>
                                <label className="forum-card__progress__last-chapter">
                                    {progress.totalPosts}
                                </label>
                            </>
                        )
                    ) : null}
                </div>
            </div>
        </div>
    );
}
