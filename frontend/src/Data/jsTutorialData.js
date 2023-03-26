/*
 - Intro
 - Variables
 - Functions
 - Conditionals (if else)
 - Loops
 - Events
 - DOM
 - DOM manipulation
*/

export const jsTutorialData = [
    {
        title: "1. Introduction To JS",
        body: [
            {
                content:
                    "Welcome to the first chapter of JS tutorial. So what exactly is JS? Just like how HTML provides structure and CSS provides styles and presentability, Javascript or JS in short is a programming language that is used to add interractivity to pages. If you were to consider the human body in terms of website, HTML is the skeleton (structure), CSS is the skin (appearance), and JavaScript is the brain.",
                type: "paragraph",
            },
            {
                content: "Javascript can be used/added in two ways",
                type: "paragraph",
            },
            {
                content: [
                    "Writing JS inside <script></script> tag and including it within body or head tags in the document",
                    "Writing JS in different file with extention .js and importing it to html document using link tag.",
                ],
                type: "list",
            },
            {
                content: "",
                type: "task",
            },
            {
                content:
                    "Note: Javascript will most of the time not have any visible changes so for this tutorial, We will be using console.log(). More about it on next chapter",
                type: "paragraph",
            },
            {
                content:
                    "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/302240292_406224741647590_8522065755111376321_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WsOI9W-jmjkAX8fi5GV&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDEyIFXsiEkmmAs6obi5iWobBsp91ZrRkMk3p7SOKTlHA&oe=642340B2",
                type: "outputImage",
            },
        ],
    },
    {
        title: "2. Console ",
        body: [
            {
                content:
                    "The console is a panel that displays important messages, like errors, for developers. Unlike HTML and CSS, much of the JS code is invisible to us by default. To make this changes visible we will log to console.",
                type: "paragraph",
            },
            {
                content: [
                    "Windows/Linux: Ctrl + Shift + J",
                    "Mac: Shift + Command + J",
                ],
                type: "list",
            },
            {
                content:
                    "However, for this tutorial, the output window will act as your console window.",
                type: "paragraph",
            },
            {
                content: `console.log("Hello")';
console.log(100)`,
                type: "code",
            },
            {
                content:
                    "The above code will print or display the text Hello and the number 100 to the console. Any value apart from numbers must be written within quotation (\" \" or ' ')",
                type: "paragraph",
            },
            {
                content: {
                    task: "Log the following message to the console - Hello World. Do not forget the semicolon(;) at the end of the line",
                    answer: {
                        pattern: "^console\\.log\\([\"']Hello World[\"']\\);$",
                        text: "console.log('Hello World');",
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                code: "<label>The output to console.log will appear below : </label> <br /><hr/>",
                type: "output",
                language: "js",
            },
        ],
    },
    {
        title: "3. Variables ",
        body: [
            {
                content:
                    "Variables are containers for storing data/value like a number or a piece of text. Think of it like a labeled box that you can put things into.",
                type: "paragraph",
            },
            {
                content: `let name = 'Sampanna';
let age = 22;`,
                type: "code",
            },
            {
                content:
                    "In the code above, name is a variable that stores the value 'Sampanna' and age is a variable that stores the value of 22. Each line of code must end with an semicolon (;) in js.",
                type: "paragraph",
            },
            {
                content:
                    "The are the very basics of variables in js but keep in mind the following points.",
                type: "paragraph",
            },
            {
                content: [
                    "If the value contains alphanumeric values (alphabets or combination of alphabets and numbers) or symbols then it must be writting within a quotation (' ' or \" \")",
                    "The name of the variable must follow variable naming convention.",
                    "Variables are case sensitive meaning name is not equal to Name",
                    "Try to keep variable names meaningful. If you want to store phone number then the name phoneNumber is better than pno.",
                ],
                type: "list",
            },
            {
                content: {
                    task: "Create a variable in JavaScript which will store the value of 'Nepal' to variable with any name of your choice",
                    answer: {
                        pattern:
                            "^let\\s*(\\w+)\\s*=\\s*['\"](Nepal)['\"];\\n?\\s*console\\.log\\(\\1\\);$",
                        text: "let country = 'Nepal';console.log(country);",
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                code: "<label>The output to console.log will appear below : </label> <br /><hr/>",
                type: "output",
                language: "js",
            },
        ],
    },
];
