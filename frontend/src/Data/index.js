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
            {
                content:
                    "https://blog.stackfindover.com/wp-content/uploads/2021/02/what-is-html.jpg",
                type: "outputImage",
            },
        ],
    },
    {
        title: "2. Document Structure",
        body: [
            {
                content:
                    "Every html document follows certain structure. An example of HTML document is as follows :",
                type: "paragraph",
            },
            {
                content: `<!DOCTYPE html> 
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Heading 1</h1>
  </body>
</html>`,
                type: "code",
            },
            {
                content: [
                    "<!DOCTYPE html> - Notifies browser that the document / code is HTML",
                    "<html> - root element of the document, and all other elements will be contained within it.",
                    "<head> - contains page title, keywords, and other information that is not displayed on the webpage itself.",
                    "<title> sets the title of the webpage, which is displayed in the browser's title bar.",
                    "<body> contains the content of the webpage that will be displayed in the browser.",
                ],
                type: "list",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of a heading (<h1></h1>) with any text of your choice. ",
                    answer: {
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]<html>[\\s\\S]<head>[\\s\\S]<title>[\\s\\S]*?<\\/title>[\\s\\S]<\\/head>[\\s\\S]<body>[\\s\\S]*?<h1>[\\s\\S]*?<\\/h1>[\\s\\S]*?<\\/body>[\\s\\S]<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My first heading</h1>
  </body>
</html>`,
                    },
                },
                type: "task",
                width: "60%",
            },
        ],
    },
    {
        title: "3. Elements",
        body: [
            {
                content:
                    "HTML is made up of elements which are like containers that hold content such as text, images, videos, and links. The content inside these elements is then displayed on a web page when viewed in a web browser. Here's an example of what a basic HTML element looks like :",
                type: "paragraph",
            },
            {
                content: "<p> Hello World </p>  ",
                type: "code",
            },
            {
                content:
                    "An element is composed of three components - opening tag, content and closing tag. In the example above, 'Hello World' is a content, <p> and </p> are opening and closing tags respectively. Tags are enclosed inside angle brackets (<>). Some things to keep in mind : ",
                type: "paragraph",
            },
            {
                content: [
                    "HTML has predefined collection of elements so you cannot make your own tags and elements.",
                    "Each elements will behave differently so you cannot switch between tags and expect exact behaviour.",
                ],
                type: "list",
            },
            {
                content:
                    "Now that we learned about what makes up an html document, we will learn about different types of elements in the next chapter.",
                type: "paragraph",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of a paragraph with the text 'Today I learned about elements' ",
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
        ],
    },
    {
        title: "5. Nesting",
        body: [
            {
                content:
                    "When an element is contained inside another element, it is considered the child of that element. This is known as Element Nesting. Since there can be multiple levels of nesting, this analogy can be extended to grandchildren, great-grandchildren, and beyond. ",
                type: "paragraph",
            },
            {
                content: "asdf",
                type: "paragraph",
            },
            {
                content: "",
                type: "code",
            },
            {
                content: [" ", " "],
                type: "list",
            },
        ],
    },
    {
        title: "NA. Template",
        body: [
            {
                content: "",
                type: "paragraph",
            },
            {
                content: "",
                type: "code",
            },
            {
                content: "",
                type: "paragraph",
            },
            {
                content: [" ", " ", " "],
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
