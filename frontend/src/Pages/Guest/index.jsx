import React from "react";
import "./style.css";

export default function Guest() {
    const handleContinueClick = () => {
        // Login with credentials for guest.
        // In backend check if guest acc exists, if not create new guest acc
    };

    return (
        <div className="guest-page">
            <div className="guest-container">
                <h1>NOTICE</h1>
                <p className="guest-notice">
                    Dear user, we would like to inform you that as a guest
                    account holder, you will have certain limitations on our
                    website. While you will have access to the first three
                    chapters of our HTML tutorial, the rest of our tutorials are
                    exclusively available to members only. Additionally, as a
                    guest, you will be able to view our community forum, but you
                    will not be able to interact with other members or create
                    posts. Finally, please note that you will not be able to
                    access your personalized profile page until you become a
                    member. We encourage you to become a member to take
                    advantage of all the benefits our website has to offer.
                    Click on continue to proceed.
                </p>
                <br />
                <button class="guest-continue" onClick={handleContinueClick}>
                    CONTINUE
                </button>
                <br />
            </div>
        </div>
    );
}
