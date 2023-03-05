import React, { useEffect, useRef, useState } from "react";
import { htmlTutorialData } from "../../../Data";
import { Button, Input, Tour } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
import "./style.css";

const TutorialTemplate = ({ dataaa, state, setState }) => {
    const [isAnswerCorrect, setisAnswerCorrect] = useState(false);
    const [open, setOpen] = useState(false);

    const userAnswerRef = useRef(null);
    const RevealAnswerRef = useRef(null);
    const PreviousRef = useRef(null);
    const NextRef = useRef(null);
    const TutorialRef = useRef(null);
    const OutputRef = useRef(null);
    const TaskRef = useRef(null);

    useEffect(() => {
        setOpen(true);
    }, []);

    const data = htmlTutorialData.ch1;

    const steps = [
        {
            title: "Guide",
            description: "Learning portion of the tutorial takes place here",
            target: () => TutorialRef.current,
        },
        {
            title: "Guide",
            description: "Each pages will contain tasks like this",
            target: () => TaskRef.current,
        },
        {
            title: "Guide",
            description: "Output of the tasks is displayed here",
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

    const handleReveal = () => {
        // console.log(data.);
    };

    const handlePrevious = () => {
        setState(state - 1);
    };

    const handleNext = () => {
        setState(state + 1);
    };

    const handleInputChange = (e, content) => {
        let answer = e.target.value;
        if (content.prefix) answer = content.prefix + answer;
        if (content.suffix) answer = answer + content.suffix;
        if (content.answer.pattern) {
            const pattern = new RegExp(content.answer.pattern);
            if (pattern.test(answer)) {
                userAnswerRef.current.innerHTML = answer;
                setisAnswerCorrect(true);
            } else setisAnswerCorrect(false);
        } else {
            userAnswerRef.current.innerHTML = answer;
        }
    };

    return (
        <div className="tutorial-template">
            {state === 1 ? (
                <Tour
                    open={open}
                    onClose={() => setOpen(false)}
                    steps={steps}
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
                        else if (item.type === "task")
                            return (
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
                                    <Input
                                        prefix="<h1>"
                                        suffix="</h1>"
                                        placeholder=" Write Something Here"
                                        onChange={(e) =>
                                            handleInputChange(e, item.content)
                                        }
                                        allowClear
                                        style={{
                                            width: item.width,
                                            padding: "5px",
                                        }}
                                    />
                                </div>
                            );
                    })}
                </div>
                <div className="tutorial-template__output" ref={OutputRef}>
                    <div className="html-cl1__output" ref={userAnswerRef}>
                        Output Will Appear Here
                    </div>
                </div>
            </div>
            <div className="tutorial-template__botton">
                <Button onClick={handleReveal} ref={RevealAnswerRef}>
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
