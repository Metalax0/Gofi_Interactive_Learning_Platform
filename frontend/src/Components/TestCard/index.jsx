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

export default function TestCard({
    headerText,
    bodyTitle,
    bodyText,
    testCount,
    reward,
    headerColor,
    score,
    navigateTo,
    test,
}) {
    const [scorePercent, setscorePercent] = useState(0);
    const cardHeaderRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        cardHeaderRef.current.style.setProperty("--bg-header", headerColor);
        // getUserStatistics();
    }, []);

    const handleTestStart = () => {
        console.log(navigateTo);
        navigate(`${navigateTo}`);
    };

    // const getUserStatisticsURL = useSelector(
    //     (state) => state.global.getUserStatisticsURL
    // );

    // const getUserStatistics = () => {
    //     const userID = cookies.get("USERID");
    //     const config = {
    //         method: "get",
    //         url: getUserStatisticsURL,
    //         params: { userID: userID },
    //     };
    //     handleGetUserStatistics(config).then((res) => {
    //         const lastChapter = res.data.tutorialProgress.filter(
    //             (item) => item.tutorial === tutorial
    //         )[0].chaptersCompleted;

    //         const percentCompleted = (lastChapter * 100) / chapterCount;
    //         settutorialProgress({
    //             percent: percentCompleted,
    //             lastchapter: lastChapter,
    //         });
    //     });
    // };

    return (
        <div className="test-card">
            <div className="test-card__header" ref={cardHeaderRef}>
                <label>{headerText}</label>
            </div>
            <div className="test-card__body">
                <label className="test-card__body__title">{bodyTitle}</label>
                <label className="test-card__body__text">{bodyText}</label>
            </div>
            <div className="test-card__footer">
                <div className="test-card__footer__chapter-count">
                    <label>Includes {testCount} Tests</label>
                </div>
                <div className="test-card__footer__test">
                    <label>Multiple Choices and Fill in the blanks</label>
                </div>
                <div className="test-card__footer__difficulty">
                    <label>{reward}</label>
                </div>
            </div>
            <div className="test-card__progress">
                <label>
                    <b>Personal High Score</b>
                </label>
                <Progress percent={scorePercent} />
                <label>Last High Score - </label>
                <label className="test-card__progress__last-chapter">0</label>
                <br />
                <br />
                <label>Number of attempts - </label>
                <label className="test-card__progress__last-chapter">0</label>
            </div>

            <div className="test-card__buttons">
                <Button
                    id="test-card__buttons-1"
                    type="primary"
                    size="medium"
                    onClick={handleTestStart}
                >
                    Start
                </Button>
            </div>
        </div>
    );
}
