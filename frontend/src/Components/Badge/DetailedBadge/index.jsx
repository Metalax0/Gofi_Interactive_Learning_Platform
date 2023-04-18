import React, { useEffect, useState } from "react";
import "./style.css";
import {
    EditTwoTone,
    FileTwoTone,
    HeartTwoTone,
    IdcardTwoTone,
    MessageTwoTone,
    TrophyTwoTone,
} from "@ant-design/icons";

export default function DetailedBadge({ title, description, icon }) {
    const handleBadgeIcon = () => {
        switch (icon) {
            // --------
            // General
            // --------

            case "signin":
                // Made an gofi account.
                return <IdcardTwoTone size={"big"} />;

            // -------
            // FORUM
            // -------

            case "post":
                // First Post in community
                return <EditTwoTone />;

            case "comment":
                // First Comment in community
                return <MessageTwoTone />;

            case "like":
                // Sent first like in community
                return <HeartTwoTone />;

            // ---------
            // TUTORIAL
            // ---------

            case "tutorial":
                // Completed first tutorial till the end
                return <FileTwoTone />;

            case "test":
                // Completed all tutorialss
                return <TrophyTwoTone />;

            default:
                break;
        }
    };

    return (
        <div className="detailed-badge">
            <div className="detailed-badge-icon">{handleBadgeIcon()}</div>
            <label className="detailed-badge-title">{title}</label>
            <label className="detailed-badge-description">{description}</label>
        </div>
    );
}
