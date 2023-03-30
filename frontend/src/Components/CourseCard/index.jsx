import { Button, Collapse, Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { handleGetUserStatistics } from "../../Functions/handleGetUserStatistics";
import "./style.css";

const { Panel } = Collapse;
const cookies = new Cookies();

export default function CourseCard({
    headerText,
    bodyTitle,
    bodyText,
    chapterCount,
    reward,
    headerColor,
    chapters,
    navigateTo,
    tutorial,
}) {
    const [tutorialProgress, settutorialProgress] = useState({
        percent: 0,
        lastchapter: 0,
    });
    const cardHeaderRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        cardHeaderRef.current.style.setProperty("--bg-header", headerColor);
        getUserStatistics();
    }, []);

    const handleChapterOneClick = () => {
        console.log(navigateTo);
        navigate(`${navigateTo}`);
    };

    const getUserStatisticsURL = useSelector(
        (state) => state.global.getUserStatisticsURL
    );

    const getUserStatistics = () => {
        const userID = cookies.get("USERID");
        const config = {
            method: "get",
            url: getUserStatisticsURL,
            params: { userID: userID },
        };
        handleGetUserStatistics(config).then((res) => {
            const lastChapter = res.data.tutorialProgress.filter(
                (item) => item.tutorial === tutorial
            )[0].chaptersCompleted;

            // x % of chapterCount is lastChapter
            // x/100 x chapter = last chapter
            // x * chapter = last chapter * 100
            // x = (lastCh * 100 ) / ch

            const percentCompleted = (lastChapter * 100) / chapterCount;
            settutorialProgress({
                percent: percentCompleted,
                lastchapter: lastChapter,
            });
        });
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
                <Progress percent={tutorialProgress.percent} />
                <label>Last chapter viewed - </label>
                <label className="course-card__progress__last-chapter">
                    {tutorialProgress.lastchapter}
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
                        {chapters.map((chapter, id) => (
                            <label key={id}>{chapter}</label>
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
