import React from "react";
import "./style.css";
import { Button } from "antd";

export default function TestTemplate() {
    return (
        <div className="test-template">
            <div className="test-template-container">
                <h2>HTML</h2>
                <div className="test-template-question">
                    <div className="test-template-question__icon">
                        <b>1/5</b>
                    </div>
                    <div className="test-template-question__text">
                        What is the correct answer
                    </div>
                </div>
                <div className="test-template-answers">
                    <div className="test-template-options">
                        <div className="test-template-options-group">
                            <div className="test-template-option">
                                <div className="test-template-option--label">
                                    A
                                </div>
                                <div className="test-template-option--text">
                                    Option A
                                </div>
                            </div>
                            <div className="test-template-option">
                                <div className="test-template-option--label">
                                    B
                                </div>
                                <div className="test-template-option--text">
                                    Option B
                                </div>
                            </div>
                        </div>
                        <div className="test-template-options-group">
                            <div className="test-template-option">
                                <div className="test-template-option--label">
                                    C
                                </div>
                                <div className="test-template-option--text">
                                    Option C
                                </div>
                            </div>
                            <div className="test-template-option">
                                <div className="test-template-option--label">
                                    D
                                </div>
                                <div className="test-template-option--text">
                                    Option D
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Button>Submit</Button> */}
                </div>
            </div>
        </div>
    );
}
