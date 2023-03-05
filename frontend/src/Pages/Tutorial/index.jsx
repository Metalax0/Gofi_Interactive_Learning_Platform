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
                    reward={tutorialCardData.html.reward}
                    headerColor={tutorialCardData.html.headerColor}
                    chapters={tutorialCardData.html.chapters}
                    progress={tutorialCardData.html.progress}
                    navigateTo={tutorialCardData.html.navigateTo}
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.css.headerText}
                    bodyTitle={tutorialCardData.css.bodyTitle}
                    bodyText={tutorialCardData.css.bodyText}
                    chapterCount={tutorialCardData.css.chapterCount}
                    reward={tutorialCardData.css.reward}
                    headerColor={tutorialCardData.css.headerColor}
                    chapters={tutorialCardData.css.chapters}
                    progress={tutorialCardData.css.progress}
                    navigateTo={tutorialCardData.css.navigateTo}
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.js.headerText}
                    bodyTitle={tutorialCardData.js.bodyTitle}
                    bodyText={tutorialCardData.js.bodyText}
                    chapterCount={tutorialCardData.js.chapterCount}
                    reward={tutorialCardData.js.reward}
                    headerColor={tutorialCardData.js.headerColor}
                    chapters={tutorialCardData.js.chapters}
                    progress={tutorialCardData.js.progress}
                    navigateTo={tutorialCardData.js.navigateTo}
                />
            </section>
        </div>
    );
}
