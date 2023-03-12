import React, { useState } from "react";
import { cssTutorialData } from "../../../Data";
import TutorialTemplate from "../TutorialTemplate";
import "./style.css";
const TutorialCSS = () => {
    const [activeChapter, setactiveChapter] = useState(1);
    // TRACK WHAT PAGE TO SHOW (1 or continue )

    return (
        <div className="tutorial-css">
            <TutorialTemplate
                state={activeChapter}
                setState={setactiveChapter}
                data={cssTutorialData[activeChapter - 1]}
            />
        </div>
    );
};

export default TutorialCSS;
