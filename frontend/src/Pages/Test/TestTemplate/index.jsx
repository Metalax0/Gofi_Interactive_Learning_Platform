import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { handleUpdateTestProgress } from "../../../Functions/handleUpdateTestProgress";

export default function TestTemplate({
    state,
    setState,
    data,
    test,
    testCount,
}) {
    const updateTestProgressURL = useSelector(
        (state) => state.global.updateTestProgressURL
    );

    const navigate = useNavigate();
    const handleClick = (option) => {
        if (option === data.answer) {
            const userID = JSON.parse(
                localStorage.getItem("activeUser")
            ).userID;
            const score = state;
            const config = {
                method: "post",
                url: updateTestProgressURL,
                data: {
                    userID,
                    test,
                    score,
                },
            };
            handleUpdateTestProgress(config);

            if (state + 1 <= testCount) setState(state + 1);
            else console.log("// Navigate to test Completed page");
        } else {
            // wrong then open modal and say going to previous page in 3 seconds
            navigate("/test");
        }
    };

    return (
        <div className="test-template">
            <div className="test-template-container">
                <h2>{test.toUpperCase()}</h2>
                <div className="test-template-question">
                    <div className="test-template-question__icon">
                        <b>
                            {state}/{testCount}
                        </b>
                    </div>
                    <div className="test-template-question__text">
                        {data.question}
                    </div>
                </div>
                <div className="test-template-answers">
                    <div className="test-template-options">
                        <div className="test-template-options-group">
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("A")}
                            >
                                <div className="test-template-option--label">
                                    A
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionA}
                                </div>
                            </div>
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("B")}
                            >
                                <div className="test-template-option--label">
                                    B
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionB}
                                </div>
                            </div>
                        </div>
                        <div className="test-template-options-group">
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("C")}
                            >
                                <div className="test-template-option--label">
                                    C
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionC}
                                </div>
                            </div>
                            <div
                                className="test-template-option"
                                onClick={() => handleClick("D")}
                            >
                                <div className="test-template-option--label">
                                    D
                                </div>
                                <div className="test-template-option--text">
                                    {data.optionD}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
