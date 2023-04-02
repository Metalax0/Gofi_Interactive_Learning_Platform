import React, { useState } from "react";
import { cssTestData } from "../../../Data/cssTestData.js";
import TestTemplate from "../TestTemplate";

export const TestCSS = () => {
    const [activeTest, setactiveTest] = useState(1);

    return (
        <div className="test-css">
            <TestTemplate
                state={activeTest}
                setState={setactiveTest}
                data={cssTestData[activeTest - 1]}
                testCount={cssTestData.length}
                test="css"
            />
        </div>
    );
};
