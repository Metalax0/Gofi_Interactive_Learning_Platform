export const tutorialCardData = {
    html: {
        headerText: "Structure",
        bodyTitle: "Learn HTML",
        bodyText:
            "Learn the basics of HTML - a markup language used for creating web pages. It defines the structure of a Web page.",
        chapterCount: 5,
        reward: "Badge provided on completion",
        headerColor: "#ff907c",
        chapters: [
            "1. Introduction To HTML",
            "2. Document Structure",
            "3. Element - Overview",
            "4. Element - Paragraph",
            "5. Element - Heading",
            "6. Attributes",
            "7. Element - Image",
            "8. Element - Hyperlink",
            "9. Element - Nesting",
        ],
        progress: {
            progress: 0,
            lastChapter: "NONE",
        },
        navigateTo: "/tutorial/html",
    },
    css: {
        headerText: "Style",
        bodyTitle: "Learn CSS",
        bodyText:
            "Learn the basics of CSS - a styling language used for making web pages presentable. It defines the appearance of elements in a Web page.",
        chapterCount: 5,
        reward: "Badge provided on completion",
        headerColor: "#7cf0ff",
        chapters: [
            "chapter 1",
            "chapter 2",
            "chapter 3",
            "chapter 4",
            "chapter 5",
        ],
        progress: {
            progress: 0,
            lastChapter: "NONE",
        },
        navigateTo: "/tutorial/css",
    },
    js: {
        headerText: "Functionality",
        bodyTitle: "Learn JavaScript",
        bodyText:
            "Learn the basics of JavaScript - a scripting language used for creating web pages. It defines the structure of a Web page.",
        chapterCount: 5,
        reward: "Badge provided on completion",
        headerColor: "#ffe77c",
        chapters: [
            "chapter 1",
            "chapter 2",
            "chapter 3",
            "chapter 4",
            "chapter 5",
        ],
        progress: {
            progress: 0,
            lastChapter: "NONE",
        },
        navigateTo: "/tutorial/js",
    },
};

export const forumCardData = {
    create: {
        headerText: "Create",
        bodyTitle: "Ask the community",
        bodyText:
            "Stuck in a problem? Got any questions related to the tutorials or programming in general? Click on this card to ask questions to the community and clear your doubts.",
        chapterCount: 5,
        reward: "Badges and points provided on post creation",
        headerColor: "#ff907c",
        navigateTo: "/forum/create",
    },
    browse: {
        headerText: "Browse",
        bodyTitle: "See what others are saying",
        bodyText:
            "Dive into community forum and view posts made by others. Search for posts based on several categories, tags and title. You can answer others questions as well",
        chapterCount: 5,
        reward: "Badges and points provided on interraction",
        headerColor: "#7cf0ff",
        progress: {
            postsCount: 1,
        },
        navigateTo: "/forum/browse",
    },
    view: {
        headerText: "View",
        bodyTitle: "My Posts",
        bodyText:
            "Asked a question a while ago but can't seem to find it? Click here to view all of your post details. You can also manage your posts (delete).",
        chapterCount: 5,
        reward: "No Badges or points",
        headerColor: "#ffe77c",
        progress: {
            totalPosts: 1,
            totalComments: 1,
        },
        navigateTo: "/forum/view",
    },
};
