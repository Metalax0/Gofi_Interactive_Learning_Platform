import React from "react";
import { testCardData } from "../../Data/cardData";
import "./style.css";
import TestCard from "../../Components/TestCard";
import { htmlTestData } from "../../Data/htmlTestData";
import { cssTestData } from "../../Data/cssTestData";
import { jsTestData } from "../../Data/jsTestData";

export default function Test() {
    return (
        <div className="test-page">
            <section className="test-section">
                <TestCard
                    headerText={testCardData.html.headerText}
                    bodyTitle={testCardData.html.bodyTitle}
                    bodyText={testCardData.html.bodyText}
                    testCount={htmlTestData.length}
                    reward={testCardData.html.reward}
                    headerColor={testCardData.html.headerColor}
                    navigateTo={testCardData.html.navigateTo}
                    test="html"
                />
            </section>
            <section className="test-section">
                <TestCard
                    headerText={testCardData.css.headerText}
                    bodyTitle={testCardData.css.bodyTitle}
                    bodyText={testCardData.css.bodyText}
                    testCount={cssTestData.length}
                    reward={testCardData.css.reward}
                    headerColor={testCardData.css.headerColor}
                    navigateTo={testCardData.css.navigateTo}
                    test="css"
                />
            </section>
            <section className="test-section">
                <TestCard
                    headerText={testCardData.js.headerText}
                    bodyTitle={testCardData.js.bodyTitle}
                    bodyText={testCardData.js.bodyText}
                    testCount={jsTestData.length}
                    reward={testCardData.js.reward}
                    headerColor={testCardData.js.headerColor}
                    navigateTo={testCardData.js.navigateTo}
                    test="js"
                />
            </section>
        </div>
    );
}
