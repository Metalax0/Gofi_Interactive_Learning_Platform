import { Button, Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import CreatePost from "./CreatePost";
import ViewAllPost from "./ViewAllPost";
import "./style.css";

export default function Forum() {
    const [activeTab, setactiveTab] = useState(0);
    const tabList = [<ViewAllPost />, <CreatePost />];

    const useEffect =
        (() => {
            //
        },
        []);

    const handleCreatePost = () => {
        console.log("create");
    };

    const handleViewAll = () => {
        console.log("view");
    };

    const handleDeletePost = () => {
        console.log("delete");
    };

    return (
        <div className="forum-page">
            <div className="forum-page__left">
                <Button
                    type="primary"
                    size="large"
                    block
                    onClick={() => setactiveTab(0)}
                >
                    View All
                </Button>
                <Button
                    type="default"
                    size="large"
                    block
                    onClick={() => setactiveTab(1)}
                >
                    Create Post
                </Button>
            </div>
            <div className="forum-page__right">{tabList[activeTab]}</div>
        </div>
    );
}
