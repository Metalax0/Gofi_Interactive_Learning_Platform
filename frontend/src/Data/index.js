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

export const htmlTutorialData = [
    {
        title: "1. Introduction To HTML",
        body: [
            {
                content:
                    "Welcome to the first chapter of HTML tutorial. So what exactly is HTML? HTML provides structure to the content appearing on a website, such as images, text, or videos. Right-click on any page on the internet, choose “Inspect,” and you’ll see HTML in a panel of your screen. This website where you are taking your tutorial was built using HTML.",
                type: "paragraph",
            },
            {
                content: "Key Points:",
                type: "paragraph",
            },
            {
                content: [
                    "HTML stands for HyperText Markup Language",
                    "It is the standard markup language for creating Web pages",
                    "It describes the structure of a Web page",
                ],
                type: "list",
            },
            {
                content: "",
                type: "task",
            },
        ],
    },
    {
        title: "2. Elements and Tags",
        body: [
            {
                content:
                    "HTML is made up of tags which are like containers that hold content such as text, images, videos, and links. The content inside these tags is then displayed on a web page when viewed in a web browser.",
                type: "paragraph",
            },
            {
                content:
                    "Here's an example of what a basic HTML tag looks like:",
                type: "paragraph",
            },
            {
                content: "<p> This is a paragraph </p>",
                type: "code",
            },
            {
                content: "HTML stands for HyperText Markup Language",
                type: "paragraph",
            },
            {
                content: [
                    "HTML stands for HyperText Markup Language",
                    "A markup language is a computer language that defines the structure and presentation of raw text.",
                    "In HTML, the computer can interpret raw text that is wrapped in HTML elements.",
                    "HyperText is text displayed on a computer or device that provides access to other text through links, also known as hyperlinks. You probably clicked on a couple of hyperlinks on your way to this course.",
                ],
                type: "list",
            },
            {
                content: {
                    task: "In the field below, type your name in between <h1> and </h1>",
                    prefix: "<h1>",
                    suffix: "</h1>",
                    answer: {
                        pattern: "<h1>([a-zA-Z0-9\\s]+)</h1>",
                        text: "Sampanna Pokharel",
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                content: {},
                output: "",
            },
        ],
    },
];
