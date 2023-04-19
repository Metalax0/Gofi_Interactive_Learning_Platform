import React from "react";
import CourseCard from "../../Components/CourseCard";
import { tutorialCardData } from "../../Data/cardData";
import { htmlTutorialData } from "../../Data/htmlTutorialData";
import { cssTutorialData } from "../../Data/cssTutorialData";
import { jsTutorialData } from "../../Data/jsTutorialData";
import "./style.css";

export default function Tutorial() {
    return (
        <div className="tutorial-page">
            <section className="tutorial-section">
                <CourseCard
                    headerText="Logical"
                    bodyTitle="Problem Solving"
                    bodyText={
                        "Develop essential problem-solving skills in a practical and engaging way."
                    }
                    chapterCount="One"
                    headerColor="#32a856"
                    chapters={[""]}
                    progress={""}
                    navigateTo="/tutorial/problemsolving"
                    tutorial="html"
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.html.headerText}
                    bodyTitle={tutorialCardData.html.bodyTitle}
                    bodyText={tutorialCardData.html.bodyText}
                    chapterCount={htmlTutorialData.length}
                    reward={tutorialCardData.html.reward}
                    headerColor={tutorialCardData.html.headerColor}
                    chapters={tutorialCardData.html.chapters}
                    progress={tutorialCardData.html.progress}
                    navigateTo={tutorialCardData.html.navigateTo}
                    tutorial="html"
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.css.headerText}
                    bodyTitle={tutorialCardData.css.bodyTitle}
                    bodyText={tutorialCardData.css.bodyText}
                    chapterCount={cssTutorialData.length}
                    reward={tutorialCardData.css.reward}
                    headerColor={tutorialCardData.css.headerColor}
                    chapters={tutorialCardData.css.chapters}
                    progress={tutorialCardData.css.progress}
                    navigateTo={tutorialCardData.css.navigateTo}
                    tutorial="css"
                />
            </section>
            <section className="tutorial-section">
                <CourseCard
                    headerText={tutorialCardData.js.headerText}
                    bodyTitle={tutorialCardData.js.bodyTitle}
                    bodyText={tutorialCardData.js.bodyText}
                    chapterCount={jsTutorialData.length}
                    reward={tutorialCardData.js.reward}
                    headerColor={tutorialCardData.js.headerColor}
                    chapters={tutorialCardData.js.chapters}
                    progress={tutorialCardData.js.progress}
                    navigateTo={tutorialCardData.js.navigateTo}
                    tutorial="js"
                />
            </section>
        </div>
    );
}
