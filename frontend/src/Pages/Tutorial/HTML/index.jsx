import React, { useState } from "react";
import HTMLTutorialTemplate from "../TutorialTemplate";
import "./style.css";
const TutorialHTML = () => {
    const [activeChapter, setactiveChapter] = useState(1);

    const manageChapter = () => {
        switch (activeChapter) {
            case 1:
                return (
                    <HTMLTutorialTemplate
                        state={activeChapter}
                        setState={setactiveChapter}
                    />
                );

            case 2:
                return (
                    <HTMLTutorialTemplate
                        state={activeChapter}
                        setState={setactiveChapter}
                    />
                );

            default:
                return (
                    <HTMLTutorialTemplate
                        state={activeChapter}
                        setState={setactiveChapter}
                    />
                );
        }
    };

    return <div className="tutorial-html">{manageChapter()}</div>;
};

export default TutorialHTML;
