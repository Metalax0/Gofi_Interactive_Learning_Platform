import React from "react";
import CourseCard from "../../Components/CourseCard";
import { tutorialCardData } from "../../Data";
import "./style.css";

export default function Tutorial() {
    return (
        <div className="tutorial-page">
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.html.headerText}
                    bodyTitle={tutorialCardData.html.bodyTitle}
                    bodyText={tutorialCardData.html.bodyText}
                    chapterCount={tutorialCardData.html.chapterCount}
                    difficulty={tutorialCardData.html.difficulty}
                    headerColor={tutorialCardData.html.headerColor}
                    navigateTo={tutorialCardData.html.navigateTo}
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.css.headerText}
                    bodyTitle={tutorialCardData.css.bodyTitle}
                    bodyText={tutorialCardData.css.bodyText}
                    chapterCount={tutorialCardData.css.chapterCount}
                    difficulty={tutorialCardData.css.difficulty}
                    headerColor={tutorialCardData.css.headerColor}
                    navigateTo={tutorialCardData.css.navigateTo}
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.js.headerText}
                    bodyTitle={tutorialCardData.js.bodyTitle}
                    bodyText={tutorialCardData.js.bodyText}
                    chapterCount={tutorialCardData.js.chapterCount}
                    difficulty={tutorialCardData.js.difficulty}
                    headerColor={tutorialCardData.js.headerColor}
                    navigateTo={tutorialCardData.js.navigateTo}
                />
            </section>
        </div>
    );
}
