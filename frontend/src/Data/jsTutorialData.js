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
                    task: "Create a variable in JavaScript which will store the value of 'Nepal' to variable with any name of your choice. [Do not forget to console.log() your answer at the end]",
                    answer: {
                        pattern:
                            "^let\\s*(\\w+)\\s*=\\s*['\"](Nepal)['\"];\\n?\\s*console\\.log\\(\\1\\);$",
                        text: "let country = 'Nepal';\nconsole.log(country);",
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
        title: "4. Arithmetic Operations ",
        body: [
            {
                content:
                    "JavaScript arithmetic involves performing mathematical operations on numerical values using operators such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). These operators are used to perform calculations in programs and applications written in JavaScript.",
                type: "paragraph",
            },
            {
                content: `let numberA = 3 + 5;
let numberB = 8 - 1;
let numberC = 4 * 6;
let numberD = 10 / 5;
let numberE = 7 % 3;`,
                type: "code",
            },
            {
                content:
                    "In the code above, numberA will evaluate to 8, numberB to 7, numberC to 24, numberD to 2, numberE to 1.",
                type: "paragraph",
            },
            {
                content: "These operations are described as follows:",
                type: "paragraph",
            },
            {
                content: [
                    "Addition(+): Add two or more values together. For example, 2 + 3 would be 5.",
                    "Subtraction(-): Subtract one value from another. For example, 5 - 3 would be 2.",
                    "Multiplication(-): Multiply two or more values together. For example, 2 * 3 would be 6.",
                    "Division(/): Divide one value by another. For example, 6 / 3 wouldbe 2.",
                    "Modulus(%): Remainder of a division operation. For example, 5 % 2 would be 1",
                ],
                type: "list",
            },
            {
                content: {
                    task: "Create a variable in JavaScript which will add subtract any two numbers. The variable name and numbers is up to you. [Do not forget to console.log() your answer at the end]",
                    answer: {
                        pattern:
                            "^let\\s*(\\w+)\\s*=\\s*\\d+\\s*\\+\\s*\\d+\\s*;\\n?\\s*console\\.log\\(\\1\\);$",
                        text: "let num = 6 + 8;\nconsole.log(num);",
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
        title: "5. Functions - I",
        body: [
            {
                content:
                    "In programming, a function is a block of code that performs a specific task. Think of it like a recipe in a cookbook. The recipe tells you what ingredients to use and what steps to follow in order to make a dish. Below is an example of basic function",
                type: "paragraph",
            },
            {
                content: `function greeting(){
    console.log("Good Morning");
}`,
                type: "code",
            },
            {
                content:
                    "Here, the function called greeting is defined. It will run console.log() command when called. It can be called as follows:",
                type: "paragraph",
            },
            {
                content: `greeting();`,
                type: "code",
            },
            {
                content: [
                    "Define a function, on the next line call the function",
                    "The code inside any function will only run / execute after the function has been called.",
                ],
                type: "list",
            },
            {
                content: {
                    task: "Create a function that will log any word/words to the console. The function name and the message to log to console is up to you. ",
                    answer: {
                        pattern: `^\\s*function\\s+(\\w+)\\(\\)\\s*[\\r\\n\\s]*{[\\s\\r\\n]*console\\.log\\((['"])[^'"]*\\2\\);[\\s\\r\\n]*}[\\r\\n\\s]*\\1\\(\\)[\\r\\n\\s]*;[\\r\\n\\s]*$`,
                        text: 'function myFunction() \n{ \n\tconsole.log("Hello, world!");\n}\nmyFunction();',
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
        title: "6. Functions - II",
        body: [
            {
                content:
                    "A function in JavaScript can also take in some inputs (called arguments), performs some operations on those inputs, and then returns a result. Here's an example of a simple function with arguments:",
                type: "paragraph",
            },
            {
                content: `function addNumbers(num1, num2){
    let result = num1 + num2;
    console.log(result);
}
addNumbers(5, 6);`,
                type: "code",
            },
            {
                content: [
                    "The function called addNumbers is defined",
                    "It takes two variables as arguments (inputs)",
                    "Both variables num1 and num2 will be added",
                    "Result will be displayed using console.log",
                    "The function is called with parameters (inputs) of 5 and 3",
                    "Output of 8 will be displayed",
                ],
                type: "list",
            },
            {
                content: {
                    task: "Create a function that will take in two numbers as inputs, multiply those numbers and log the result to the console. The variable name and input numbers is up to you.",
                    answer: {
                        pattern:
                            "^\\s*function\\s+(\\w+)\\((\\w+\\s*,\\s*\\w+)\\)\\s*\\{\\s*\\r?\\n?\\s*(let\\s+\\w+\\s*=\\s*\\w+\\s*\\*\\s*\\w+;\\s*\\r?\\n?\\s*console\\.log\\(\\w+\\);\\s*\\r?\\n?\\s*)\\}\\s*\\r?\\n?\\s*\\1\\((\\d+)\\s*,\\s*(\\d+)\\);\\s*\\r?\\n?\\s*$",
                        text: `function multiply(a, b) {
    let result = a * b;
    console.log(result);
}
multiply(5, 4);`,
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
        title: "END OF TUTORIAL",
        body: [{ content: "", type: "" }],
    },
];
