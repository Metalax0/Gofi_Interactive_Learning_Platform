import { Button, Collapse, Progress } from "antd";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const { Panel } = Collapse;

export default function CourseCard({
    headerText,
    bodyTitle,
    bodyText,
    chapterCount,
    reward,
    headerColor,
    chapters,
    progress,
    navigateTo,
}) {
    const cardHeaderRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        cardHeaderRef.current.style.setProperty("--bg-header", headerColor);
    }, []);

    const handleChapterOneClick = () => {
        console.log(navigateTo);
        navigate(`${navigateTo}`);
    };
    return (
        <div className="course-card">
            <div className="course-card__header" ref={cardHeaderRef}>
                <label>{headerText}</label>
            </div>
            <div className="course-card__body">
                <label className="course-card__body__title">{bodyTitle}</label>
                <label className="course-card__body__text">{bodyText}</label>
            </div>
            <div className="course-card__footer">
                <div className="course-card__footer__chapter-count">
                    <label>Includes {chapterCount} Chapters</label>
                </div>
                <div className="course-card__footer__test">
                    <label>With Questions and Quizes</label>
                </div>
                <div className="course-card__footer__difficulty">
                    <label>{reward}</label>
                </div>
            </div>
            <div className="course-card__progress">
                <label>
                    <b>Progress</b>
                </label>
                <Progress percent={progress.progress} />
                <label>Last chapter viewed - </label>{" "}
                <label className="course-card__progress__last-chapter">
                    {progress.lastChapter}
                </label>
            </div>

            <Collapse>
                <Panel
                    header={
                        <>
                            <b>Chapters</b> <small>(click to expand)</small>
                        </>
                    }
                    key="1"
                >
                    <div className="course-card__syllabus">
                        {chapters.map((chapter) => (
                            <label>{chapter}</label>
                        ))}
                    </div>
                </Panel>
            </Collapse>

            <div className="course-card__buttons">
                <Button
                    id="course-card__buttons-1"
                    type="primary"
                    size="medium"
                    onClick={handleChapterOneClick}
                >
                    Chapter One
                </Button>
                <Button id="course-card__buttons-2" size="medium">
                    Continue
                </Button>
            </div>
        </div>
    );
}
