import React, { useState } from "react";
import { htmlTutorialData } from "../../../Data/htmlTutorialData";
import TutorialTemplate from "../TutorialTemplate";

const TutorialHTML = () => {
    const [activeChapter, setactiveChapter] = useState(1);

    return (
        <div className="tutorial-html">
            <TutorialTemplate
                state={activeChapter}
                setState={setactiveChapter}
                data={htmlTutorialData[activeChapter - 1]}
                tutorial="html"
            />
        </div>
    );
};

export default TutorialHTML;
