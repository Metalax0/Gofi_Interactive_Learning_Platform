import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ForumCard from "../../Components/ForumCard";
import { forumCardData } from "../../Data/cardData";
import { handleGetAllPost } from "../../Functions/handleGetAllPost";
import "./style.css";

export default function Forum() {
    const getAllPostURL = useSelector((state) => state.global.getAllPostURL);
    const [totalPosts, setTotalPosts] = useState({ postCount: 0 });

    useEffect(() => {
        getAllPostData();
    }, []);

    const getAllPostData = () => {
        const config = {
            method: "get",
            url: getAllPostURL,
        };
        handleGetAllPost(config).then((res) => {
            setTotalPosts({ postCount: res.data.length });
        });
    };

    return (
        <div className="forum-page">
            <section className="forum-section">
                <ForumCard
                    headerText={forumCardData.create.headerText}
                    bodyTitle={forumCardData.create.bodyTitle}
                    bodyText={forumCardData.create.bodyText}
                    chapterCount={forumCardData.create.chapterCount}
                    reward={forumCardData.create.reward}
                    headerColor={forumCardData.create.headerColor}
                    progress={forumCardData.create.progress}
                    navigateTo={forumCardData.create.navigateTo}
                />
            </section>
            <section className="forum-section">
                <ForumCard
                    headerText={forumCardData.browse.headerText}
                    bodyTitle={forumCardData.browse.bodyTitle}
                    bodyText={forumCardData.browse.bodyText}
                    chapterCount={forumCardData.browse.chapterCount}
                    reward={forumCardData.browse.reward}
                    headerColor={forumCardData.browse.headerColor}
                    progress={totalPosts}
                    navigateTo={forumCardData.browse.navigateTo}
                />
            </section>
            <section className="forum-section">
                <ForumCard
                    headerText={forumCardData.view.headerText}
                    bodyTitle={forumCardData.view.bodyTitle}
                    bodyText={forumCardData.view.bodyText}
                    chapterCount={forumCardData.view.chapterCount}
                    reward={forumCardData.view.reward}
                    headerColor={forumCardData.view.headerColor}
                    progress={forumCardData.view.progress}
                    navigateTo={forumCardData.view.navigateTo}
                />
            </section>
        </div>
    );
}
