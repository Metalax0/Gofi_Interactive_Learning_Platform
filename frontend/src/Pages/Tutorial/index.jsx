import React from "react";
import CourseCard from "../../Components/CourseCard";
import { tutorialData } from "../../Data";
import "./style.css";

export default function Tutorial() {
    // handleTutorial
    return (
        <div className="tutorial-page">
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialData.html.headerText}
                    bodyTitle={tutorialData.html.bodyTitle}
                    bodyText={tutorialData.html.bodyText}
                    chapterCount={tutorialData.html.chapterCount}
                    difficulty={tutorialData.html.difficulty}
                    headerColor={tutorialData.html.headerColor}
                    navigateTo={tutorialData.html.navigateTo}
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialData.css.headerText}
                    bodyTitle={tutorialData.css.bodyTitle}
                    bodyText={tutorialData.css.bodyText}
                    chapterCount={tutorialData.css.chapterCount}
                    difficulty={tutorialData.css.difficulty}
                    headerColor={tutorialData.css.headerColor}
                    navigateTo={tutorialData.css.navigateTo}
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialData.js.headerText}
                    bodyTitle={tutorialData.js.bodyTitle}
                    bodyText={tutorialData.js.bodyText}
                    chapterCount={tutorialData.js.chapterCount}
                    difficulty={tutorialData.js.difficulty}
                    headerColor={tutorialData.js.headerColor}
                    navigateTo={tutorialData.js.navigateTo}
                />
            </section>
        </div>
    );
}
