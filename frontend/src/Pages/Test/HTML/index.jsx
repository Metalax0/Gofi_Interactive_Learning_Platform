import React, { useState } from "react";
import { htmlTestData } from "../../../Data/htmlTestData.js";
import TestTemplate from "../TestTemplate";

export const TestHTML = () => {
    const [activeTest, setactiveTest] = useState(1);

    return (
        <div className="test-html">
            <TestTemplate
                state={activeTest}
                setState={setactiveTest}
                data={htmlTestData[activeTest - 1]}
                testCount={htmlTestData.length}
                test="html"
            />
        </div>
    );
};
