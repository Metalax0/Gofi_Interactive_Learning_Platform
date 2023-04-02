import React, { useState } from "react";
import { jsTestData } from "../../../Data/jsTestData.js";
import TestTemplate from "../TestTemplate";

export const TestJS = () => {
    const [activeTest, setactiveTest] = useState(1);

    return (
        <div className="test-js">
            <TestTemplate
                state={activeTest}
                setState={setactiveTest}
                data={jsTestData[activeTest - 1]}
                testCount={jsTestData.length}
                test="js"
            />
        </div>
    );
};
