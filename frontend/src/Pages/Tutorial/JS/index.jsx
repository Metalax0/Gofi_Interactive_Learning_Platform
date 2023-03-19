import React, { useState } from "react";
import { jsTutorialData } from "../../../Data/jsTutorialData";
import TutorialTemplate from "../TutorialTemplate";
import "./style.css";
const TutorialJS = () => {
    const [activeChapter, setactiveChapter] = useState(1);
    // TRACK WHAT PAGE TO SHOW (1 or continue )

    return (
        <div className="tutorial-js">
            <TutorialTemplate
                state={activeChapter}
                setState={setactiveChapter}
                data={jsTutorialData[activeChapter - 1]}
            />
        </div>
    );
};

export default TutorialJS;
