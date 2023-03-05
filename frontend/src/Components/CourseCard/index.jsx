import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function CourseCard({
    headerText,
    bodyTitle,
    bodyText,
    chapterCount,
    difficulty,
    headerColor,
    navigateTo,
}) {
    const cardHeaderRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        cardHeaderRef.current.style.setProperty("--bg-header", headerColor);
    }, []);

    const handleCourseCardClick = () => {
        console.log(navigateTo);
        navigate(`${navigateTo}`);
    };
    return (
        <div className="course-card" onClick={handleCourseCardClick}>
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
                    <label>{difficulty}</label>
                </div>
            </div>
        </div>
    );
}
