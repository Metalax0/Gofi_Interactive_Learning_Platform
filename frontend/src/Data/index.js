export const tutorialCardData = {
    html: {
        headerText: "Structure",
        bodyTitle: "Learn HTML",
        bodyText:
            "Learn the basics of HTML - a markup language used for creating web pages. It defines the structure of a Web page.",
        chapterCount: 5,
        difficulty: "Beginner Friendly",
        headerColor: "#ff907c",
        navigateTo: "/tutorial/html",
    },
    css: {
        headerText: "Style",
        bodyTitle: "Learn CSS",
        bodyText:
            "Learn the basics of CSS - a styling language used for making web pages presentable. It defines the appearance of elements in a Web page.",
        chapterCount: 5,
        difficulty: "Beginner Friendly",
        headerColor: "#7cf0ff",
        navigateTo: "/tutorial/css",
    },
    js: {
        headerText: "Functionality",
        bodyTitle: "Learn JavaScript",
        bodyText:
            "Learn the basics of JavaScript - a scripting language used for creating web pages. It defines the structure of a Web page.",
        chapterCount: 5,
        difficulty: "Beginner Friendly",
        headerColor: "#ffe77c",
        navigateTo: "/tutorial/js",
    },
};

export const htmlTutorialData = {
    ch1: {
        title: "INTRODUCTION TO HTML",
        body: [
            {
                content: "Welcome to the first chapter of HTML tutorial. ",
                type: "paragraph",
            },
            {
                content:
                    "So what exactly is HTML? HTML provides structure to the content appearing on a website, such as images, text, or videos. Right-click on any page on the internet, choose “Inspect,” and you’ll see HTML in a panel of your screen.",
                type: "paragraph",
            },
            {
                content: "HTML stands for HyperText Markup Language:",
                type: "paragraph",
            },
            {
                content: [
                    "A markup language is a computer language that defines the structure and presentation of raw text.",
                    "In HTML, the computer can interpret raw text that is wrapped in HTML elements.",
                    "HyperText is text displayed on a computer or device that provides access to other text through links, also known as hyperlinks. You probably clicked on a couple of hyperlinks on your way to this Codecademy course.",
                ],
                type: "list",
            },
            {
                content:
                    "Learning HTML is the first step in creating websites, but even a bit of knowledge can help you inject code snippets into newsletter, blog or website templates. As you continue learning, you can layer HTML with CSS and JavaScript to create visually compelling and dynamic websites. But for now, we’re going to focus on how to add and modify basic content on a page, like text, images, and videos. ",
                type: "paragraph",
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
};
