import React, { useEffect } from "react";
import { useRef } from "react";
import "./style.css";

export default function CourseCard({
    headerText,
    bodyTitle,
    bodyText,
    chapterCount,
    difficulty,
    headerColor,
}) {
    const cardHeaderRef = useRef(null);

    useEffect(() => {
        cardHeaderRef.current.style.setProperty("--bg-header", headerColor);
    }, []);
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
                    <label>{difficulty}</label>
                </div>
            </div>
        </div>
    );
}
