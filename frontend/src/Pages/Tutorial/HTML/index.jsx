import React, { useState } from "react";
import { htmlTutorialData } from "../../../Data";
import HTMLTutorialTemplate from "../TutorialTemplate";
import "./style.css";
const TutorialHTML = () => {
    const [activeChapter, setactiveChapter] = useState(1);

    return (
        <div className="tutorial-html">
            <HTMLTutorialTemplate
                state={activeChapter}
                setState={setactiveChapter}
                data={htmlTutorialData[activeChapter - 1]}
            />
        </div>
    );
};

export default TutorialHTML;
