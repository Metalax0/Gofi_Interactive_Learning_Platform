import React, { useState } from "react";
// import { htmlTestData } from "../../../Data/htmlTestData";
import TestTemplate from "../TestTemplate";

export const TestHTML = () => {
    const [activeTest, setactiveTest] = useState(1);

    return (
        <div className="test-html">
            <TestTemplate
                state={activeTest}
                setState={setactiveTest}
                // data={htmlTestData[activeTest - 1]}
                test="html"
            />
        </div>
    );
};
