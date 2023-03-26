const mongoose = require("mongoose");

const userStatisticsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,
        default: "novice",
    },
    badges: {
        type: [
            {
                title: { type: String, required: true, default: "" },
                description: { type: String, required: true, default: "" },
                badgeImage: { type: String, required: true, default: "" },
            },
        ],
        default: [
            {
                title: "Empty",
                description: "You have not earned any badges",
                badgeImage:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///9bWVrm5uaqqqqgoKBPT0/z8/ORkZHg4OB1dXWzs7PU1NTr6+vv7+86OjqAfn/MzMxsbGyXl5fAwMCHh4djY2PHx8dfX1+dnZ1ISEguLi66urpVVVV3d3evr69BQUElJSUvLy8MDAwXFxes5b5hAAADzUlEQVR4nO3b23LaMBSFYQljsDEQGxtIiM2hzfs/Y6UtnEna5EITSbDo+i8am4LQF587U1UPk0duqNWgHrtBTW49hchNKISPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvyCCk/TUJ3CTSqoUIcr3KQo9MrMrHzJf9pLedfCuxpHotArClOPI1HoFYWpx5Eo9IrC1ONIFHpFYepxJAq9ojD1OBKFXlGYehyJQq8oTD2ORKFXFKYeR6LQKwpTjyNR6BWFqceRKPSKwtTjSBR6RWHqcSQKvaIw9TgShV5RmHociUKvKEw9jkShVxSmHkei0CsKU48jUegVhanHkSj0isLU40gUekVh6nEkCr0yM5seZj/tML1rYajCTYpCr7JgrcJNiv9bHT8K8aMQv9sLL23c8W8uzPUy7hfcWljrRxcutG7ifkMUYd3vq4VdeO2rWg39shvMcrVstua1Q1Ud1bYpm41Zafdar6YnVVTuA3ZhF3YyEYSvc7l3Xl+UOmtd5bJWb+SH2SPNQlXKSqfU+nqfvTVQ+bBZ+RV2OhGEBrjuM63nIpzr8iSO+Wlp/lyonV1ZCfJFlfa3sV6L7EkJvww8nfDCqTt39Fq3VqinSuZvvGpp13Zu6yn3nLu5Hofm7bn50Wm9DTyf8MK52xrKbo3z9UlvZbn2yqB7EY5v3NkzjZxLZ243Dfpk6AovtLvi8Xi0x516cttOZXb3NKcRu/WMMJM3NloX70L7Szjbvwt+Zg0uvHx8UB+F5qB7Vlfh82jq7IH4LmztHmz21U3Y6UQQ/jaybSG13wndafPzNjSfW8fYSePspW/j8gehvcqNQveGT8ehgM01owo8mxjCvZvmptn33wobt6LlnuZ6eXAXzFng2cQQ2vNnt2ntzvqlcCK3A5W9OLZyDtXLprBvktcDT0ZFueLX1/NM9dVeurfCLBvvaWRfdddMuUDmoScT5770qc/m68aSLvtODqy86+zut+u6wgpLVSyzxp01L325ymq7dHZ3bMdt2Gt++meLYbwe/l0rh+SszRdB773vRziRI1dN2vw56DXxXoRyYMoxu62LoN93E+EXZ0wBnmN8X3rh2+xw/vfVTVEEfvIdu/W/YsSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjE738QDreeQuQGVQ+TR26o/wC/TiXuOSy+6AAAAABJRU5ErkJggg==",
            },
        ],
    },
    tutorialProgress: {
        type: [
            {
                tutorial: {
                    type: String,
                    enum: ["html", "css", "js"],
                    required: true,
                },
                chaptersCompleted: { type: Number, required: true, default: 0 },
            },
        ],
        default: [
            {
                tutorial: "html",
                chaptersCompleted: 0,
            },
            {
                tutorial: "css",
                chaptersCompleted: 0,
            },
            {
                tutorial: "js",
                chaptersCompleted: 0,
            },
        ],
    },
    testDetails: {
        type: [
            {
                test: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Test",
                    required: true,
                },
                attempts: { type: Number, required: true, default: 0 },
                score: { type: Number, required: true, default: 0 },
                dateTaken: { type: Date, required: true, default: Date.now },
            },
        ],
        default: [],
    },
    communityStats: {
        communityPoints: { type: Number, default: 0 },
        totalPosts: { type: Number, default: 0 },
        totalComments: { type: Number, default: 0 },
    },
});

// UserSchema
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide a Full Name!"],
        unique: false,
    },

    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },

    dateRegistered: {
        type: Date,
        default: Date.now,
        unique: false,
    },

    lastLoginDate: {
        type: Date,
        default: Date.now,
        unique: false,
    },

    isAccountDisabled: {
        type: Boolean,
        default: false,
        unique: false,
    },

    profileImg: {
        type: String,
        required: false,
        unique: false,
    },

    userType: {
        type: String,
        enum: ["admin", "member", "guest"],
        default: "member",
        unique: false,
    },

    statistics: {
        type: userStatisticsSchema,
        default: {
            badges: [],
            tutorialProgress: [],
            testDetails: [],
            communityStats: {
                communityPoints: 0,
                totalPosts: 0,
                totalComments: 0,
            },
        },
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
