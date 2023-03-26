import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Tour } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
import "./style.css";
import TextArea from "antd/es/input/TextArea";
import {
    consoleNewProxy,
    consoleOldProxy,
} from "../../../Functions/consoleProxy";
// import console from "../../../Functions/consoleOverride";

const TutorialTemplate = ({ data, state, setState }) => {
    const [textAreaValue, settextAreaValue] = useState("");
    const [browserTitle, setBrowserTitle] = useState("Title");
    const [isTaskAvailable, setisTaskAvailable] = useState(false);
    const [isAnswerCorrect, setisAnswerCorrect] = useState(false);
    const [open, setOpen] = useState(false);

    const userInputRef = useRef(null);
    const userAnswerRef = useRef(null);
    const RevealAnswerRef = useRef(null);
    const PreviousRef = useRef(null);
    const NextRef = useRef(null);
    const TutorialRef = useRef(null);
    const OutputRef = useRef(null);
    const TaskRef = useRef(null);
    const browserWindowRef = useRef(null);

    useEffect(() => {
        setOpen(true);

        if (browserWindowRef.current) {
            browserWindowRef.current.style.boxShadow =
                "0px 0px 20px rgb(211, 21, 21)";
        }
        if (userAnswerRef.current) {
            userAnswerRef.current.innerHTML = "Output Will Appear Here";

            if (data.body[data.body.length - 1].type === "output")
                userAnswerRef.current.innerHTML =
                    data.body[data.body.length - 1].code;
            else {
                userAnswerRef.current.innerHTML = "Output Will Appear Here";
            }
        }

        data.body.map((item) => {
            if (item.type === "task" && item.content === "") {
                setisAnswerCorrect(true);
                setisTaskAvailable(false);
            } else if (item.type === "task" && item.content !== "") {
                setBrowserTitle("Title");
                settextAreaValue(item.content.answer.value);
                setisAnswerCorrect(false);
                setisTaskAvailable(true);
            }
        });
        if (state === 9) setisAnswerCorrect(false);
    }, [state, data]);

    const addStyle = (add, answer = "") => {
        const style = document.querySelector("#tutorial-output-style");
        if (add) {
            style.innerHTML = `#tutorial-output ${answer}`;
        } else {
            style.innerHTML = "";
        }
    };

    const addScript = (add, answer = "") => {
        const script = document.createElement("script");
        if (add) {
            consoleNewProxy();
            script.innerHTML = `(() => {${answer}})()`;
            document.head.appendChild(script);
            document.head.removeChild(script);
            consoleOldProxy();
        } else {
            script.innerHTML = "";
            try {
                document.head.removeChild(script);
            } catch {}
        }
    };

    const steps1 = [
        {
            title: "Guide",
            description: "Learning portion of the tutorial takes place here",
            target: () => TutorialRef.current,
        },
        {
            title: "Guide",
            description:
                "Output of the tasks is displayed here (if task is available)",
            target: () => OutputRef.current,
        },
        {
            title: "Guide",
            description: "Stuck ? CLick this to reveal the correct answer",
            target: () => RevealAnswerRef.current,
        },
        {
            title: "Guide",
            description:
                "Click this to go to previous chapter. Disabled if not available",
            target: () => PreviousRef.current,
        },
        {
            title: "Guide",
            description:
                "Click this to go to next chapter. Disabled if incorrect answer",
            target: () => NextRef.current,
        },
    ];

    const steps2 = [
        {
            title: "Guide",
            description:
                "Some pages will contain tasks with certain instructions like this",
            target: () => TaskRef.current,
        },
        {
            title: "Guide",
            description: "Answer to the tasks is written here",
            target: () => userInputRef.current,
        },
        {
            title: "Guide",
            description:
                "The output is displayed here. Red glow if incorrect, green if correct answer",
            target: () => browserWindowRef.current,
        },
    ];

    const handleReveal = () => {
        data.body.map((item) => {
            if (item.type === "task") {
                settextAreaValue(item.content.answer.text);
                handleInputChange(item.content);
            }
        });
    };

    const handlePrevious = () => {
        setState(state - 1);
    };

    const handleNext = () => {
        setState(state + 1);
    };

    const handleInputChange = (content, e = null) => {
        let answer = "";

        if (e) {
            settextAreaValue(e.target.value);
            answer = e.target.value.replace(/[\n\r\s]+/g, " ").trim();
        } else answer = content.answer.text.replace(/[\n\r\s]+/g, " ").trim();

        if (content.answer.pattern) {
            const regex = new RegExp(content.answer.pattern);
            if (regex.test(answer)) {
                //Right Answer
                const startIndex = answer.indexOf("<title>") + "<title>".length;
                const endIndex = answer.indexOf("</title>");
                if (answer.includes("title"))
                    setBrowserTitle(answer.slice(startIndex, endIndex));
                userAnswerRef.current.innerHTML = "";
                userAnswerRef.current.innerHTML = answer;
                if (data.body[data.body.length - 1].type === "output") {
                    userAnswerRef.current.innerHTML =
                        data.body[data.body.length - 1].code;
                    if (data.body[data.body.length - 1].language === "js") {
                        addScript(true, answer);
                    } else addStyle(true, answer);
                }
                setisAnswerCorrect(true);
                browserWindowRef.current.style.boxShadow =
                    "0px 0px 20px rgb(21, 211, 21)";
            } else {
                // Wrong Answer
                userAnswerRef.current.innerHTML = "Output Will Appear Here";
                if (data.body[data.body.length - 1].type === "output") {
                    userAnswerRef.current.innerHTML =
                        data.body[data.body.length - 1].code;
                    if (data.body[data.body.length - 1].language === "js")
                        addScript(false);
                    else addStyle(false);
                }
                setisAnswerCorrect(false);
                browserWindowRef.current.style.boxShadow =
                    "0px 0px 20px rgb(211, 21, 21)";
            }
        }
    };

    return (
        <div className="tutorial-template">
            {state === 1 || state === 2 ? (
                <Tour
                    open={open}
                    onClose={() => setOpen(false)}
                    steps={state === 1 ? steps1 : steps2}
                />
            ) : null}
            <div className="tutorial-template__top">
                <div className="tutorial-template__content" ref={TutorialRef}>
                    <label className="tutorial__content__label">LEARN</label>
                    <h2 className="tutorial-template__content__title">
                        {data.title}
                    </h2>
                    {data.body.map((item, key) => {
                        if (item.type === "paragraph")
                            return (
                                <p
                                    className="tutorial-template__content__paragraph"
                                    key={key}
                                >
                                    {item.content}
                                </p>
                            );
                        else if (item.type === "list")
                            return (
                                <ul
                                    className="tutorial-template__content__list"
                                    key={key}
                                >
                                    {item.content.map((listItem, key) => {
                                        return <li key={key}>{listItem}</li>;
                                    })}
                                </ul>
                            );
                        else if (item.type === "code")
                            return (
                                <div
                                    className="tutorial-template__content__code"
                                    key={key}
                                >
                                    {item.content
                                        .split("\n")
                                        .map((line, index) => {
                                            if (line.trim().startsWith("<")) {
                                                const parts =
                                                    line.split(/(<.*?>)/);
                                                return (
                                                    <span key={index}>
                                                        {parts.map(
                                                            (part, i) => {
                                                                if (
                                                                    part.match(
                                                                        /(<.*?>)/
                                                                    )
                                                                ) {
                                                                    return (
                                                                        <span
                                                                            key={
                                                                                i
                                                                            }
                                                                            style={{
                                                                                color: "#eb4034",
                                                                            }}
                                                                        >
                                                                            {
                                                                                part
                                                                            }
                                                                        </span>
                                                                    );
                                                                } else {
                                                                    return part.replace(
                                                                        /\t/g,
                                                                        "\u00a0\u00a0\u00a0\u00a0"
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                        <br />
                                                    </span>
                                                );
                                            } else {
                                                return (
                                                    <React.Fragment key={index}>
                                                        {line.replace(
                                                            /\t/g,
                                                            "\u00a0\u00a0\u00a0\u00a0"
                                                        )}
                                                        <br />
                                                    </React.Fragment>
                                                );
                                            }
                                        })}
                                </div>
                            );
                        else if (item.type === "codeOutput")
                            return (
                                <div
                                    className="tutorial-template__content__code-output"
                                    key={key}
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                ></div>
                            );
                        else if (item.type === "task") {
                            if (item.category === "css") {
                                return <h1></h1>;
                            }
                            return item.content === "" ? null : (
                                <div
                                    className="tutorial-template__content__task"
                                    key={key}
                                    ref={TaskRef}
                                >
                                    <label
                                        className="tutorial__content__label"
                                        key={key}
                                    >
                                        TASK
                                    </label>
                                    <label>
                                        <ProfileOutlined /> {item.content.task}
                                    </label>
                                    <div ref={userInputRef}>
                                        <TextArea
                                            className="tutorial-template__content__task__code-box"
                                            placeholder="Write your answer here"
                                            style={{
                                                padding: "10px",
                                            }}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    item.content,
                                                    e
                                                )
                                            }
                                            autoSize={{
                                                minRows: 5,
                                                maxRows: 30,
                                            }}
                                            value={textAreaValue}
                                        />
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="tutorial-template__output" ref={OutputRef}>
                    {data.body[data.body.length - 1].type === "outputImage" ? (
                        <div className="html-output">
                            <img
                                className="tutorial-template__output__img"
                                src={data.body[data.body.length - 1].content}
                                alt="html img"
                            ></img>
                        </div>
                    ) : (
                        <div
                            className="tutorial-template__output__browser"
                            ref={browserWindowRef}
                        >
                            <div className="tutorial-template__output__browser__top">
                                <div className="tutorial-template__output__browser__title">
                                    <label className="titletext">
                                        &#9822; {browserTitle}
                                    </label>
                                    <label>x</label>
                                </div>
                                <div className="tutorial-template__output__browser__buttons">
                                    <div className="tutorial-template__output__browser__output__browser__item">
                                        -
                                    </div>
                                    <div className="tutorial-template__output__browser__output__browser__item">
                                        &#10064;
                                    </div>
                                    <div className="tutorial-template__output__browser__output__browser__item">
                                        x
                                    </div>
                                </div>
                            </div>
                            <div
                                id="tutorial-output"
                                className="tutorial-template__output__browser__body"
                                ref={userAnswerRef}
                            >
                                Output Will Appear Here
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="tutorial-template__botton">
                <Button
                    disabled={isTaskAvailable ? false : true}
                    onClick={handleReveal}
                    ref={RevealAnswerRef}
                >
                    Reveal Answer
                </Button>
                <Button
                    disabled={state === 1 ? true : false}
                    onClick={handlePrevious}
                    ref={PreviousRef}
                >
                    Previous
                </Button>
                <Button
                    disabled={isAnswerCorrect ? false : true}
                    onClick={handleNext}
                    ref={NextRef}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default TutorialTemplate;
