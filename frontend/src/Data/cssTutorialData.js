export const cssTutorialData = [
    {
        title: "1. Introduction To CSS",
        body: [
            {
                content:
                    "Welcome to the first chapter of CSS tutorial. So what exactly is CSS? CSS stands for Cascading Style Sheets, and it is a language used to describe the visual appearance of a webpage. It is one of the three main technologies used to create web pages, along with HTML and JavaScript. ",
                type: "paragraph",
            },
            {
                content: [
                    "CSS allows you to control the layout, colors, fonts, and other visual elements of a webpage.",
                    "You can apply CSS styles to specific elements on a webpage, such as headings, paragraphs, images,",
                    "CSS can be written in a separate file and linked to your HTML document, or it can be included directly in your HTML code using the style tag.",
                ],
                type: "list",
            },
            {
                content: "",
                type: "task",
            },
            {
                content:
                    "https://cronuts.digital/wp-content/uploads/2020/04/Artboard-11-1024x724.png",
                type: "outputImage",
            },
        ],
    },
    {
        title: "2. Syntax",
        body: [
            {
                content:
                    "A CSS code/ rule consists of a selector and a declaration block. We will learn about selectors and properties in detai in the later chapter but for now let us look at the basic syntax or the way to write css code.",
                type: "paragraph",
            },
            {
                content: `h1{
    color:blue;
}`,
                type: "code",
            },
            {
                content: "<h1 style='color:blue'>my heading</h1>",
                type: "codeOutput",
            },
            {
                content: [
                    "h1 = selector",
                    "color = property",
                    "blue = value",
                    "color:blue = declaration",
                    "The entire thing is known as a css rule",
                ],
                type: "list",
            },
            {
                content: {
                    task: "Write a css rule that targets the paragraph element (<p> tag) and make the color to green. (note: don't forget to include a semi color ; at the end of declaration",
                    answer: {
                        pattern:
                            "^\\s*p\\s*{\\s*color\\s*:\\s*green\\s*;\\s*}\\s*$",
                        text: `
p{
    color: green;
}`,
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                code: "<h1>My Favourite Pet</h1><p>My favourite pet is a cat called billy. Actually, it's not called billy and I don't have a cat.</p>",
                type: "output",
            },
        ],
    },
    {
        title: "3. Selectors",
        body: [
            {
                content: "CSS ",
                type: "paragraph",
            },
            {
                content:
                    "You have somewhat already used <p> element in previous chapters. In fact all the descriptions like this one are written using <p> tag",
                type: "paragraph",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of two paragraphs each with content 'I have a pet cat. It is named billy' and 'I also have a pet dog. It is named timmy",
                    answer: {
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]<html>[\\s\\S]<head>[\\s\\S]<title>[\\s\\S]*?<\\/title>[\\s\\S]<\\/head>[\\s\\S]<body>[\\s\\S]*?<p>I have a pet cat. It is named billy<\\/p>[\\s\\S]<p>I also have a pet dog. It is named timmy<\\/p>[\\s\\S]*?<\\/body>[\\s\\S]<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
    <head>
        <title>Paragraph</title>
    </head>
    <body>
        <p>I have a pet cat. It is named billy</p>                                           
        <p>I also have a pet dog. It is named timmy</p>                                           
    </body>
</html>`,
                        value: `<!DOCTYPE html> 
<html>
    <head>
        <title>Paragraph</title>
    </head>
    <body>
                  
    </body>
</html>`,
                    },
                },
                type: "task",
                width: "60%",
            },
        ],
    },
];
