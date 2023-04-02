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
    navigateTo,
    test,
}) {
    const [testProgress, settestProgress] = useState({
        highScore: 0,
        lastScore: 0,
        attempts: 0,
        dateTaken: "NULL",
    });

    const cardHeaderRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        cardHeaderRef.current.style.setProperty("--bg-header", headerColor);
        getUserStatistics();
    }, []);

    const handleTestStart = () => {
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
            const highScore = res.data.testProgress.filter(
                (item) => item.test === test
            )[0].highScore;

            const lastScore = res.data.testProgress.filter(
                (item) => item.test === test
            )[0].score;

            const attempts = res.data.testProgress.filter(
                (item) => item.test === test
            )[0].attempts;

            const dateTaken = res.data.testProgress.filter(
                (item) => item.test === test
            )[0].dateTaken;

            const percentCompleted = Math.floor((highScore * 100) / testCount);

            settestProgress({
                highScore: percentCompleted,
                lastScore: lastScore,
                attempts: attempts,
                dateTaken: dateTaken,
            });
        });
    };

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
                <Progress percent={testProgress.highScore} />
                <label>Last Score - </label>
                <label className="test-card__progress__last-chapter">
                    {testProgress.lastScore}
                </label>
                <br />
                <br />
                <label>Number of attempts - </label>
                <label className="test-card__progress__last-chapter">
                    {testProgress.attempts}
                </label>
                <br />
                <br />
                <label>Last Taken </label>
                <label className="test-card__progress__last-chapter">
                    {testProgress.dateTaken.slice(0, 10)}
                </label>
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
