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
                content: `<h1> my heading </h1>`,
                type: "code",
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
                    task: "Write a css rule that targets the paragraph element (<p> tag) and make the color to red. (note: don't forget to include a semi color ; at the end of declaration",
                    answer: {
                        pattern:
                            "^\\s*p\\s*{\\s*color\\s*:\\s*red\\s*;\\s*}\\s*$",
                        text: `
p{
    color: red;
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
                content:
                    "Selectors are used to target specific HTML element on the webpage. Some of the basic selectors are class, id, tag name. There are others as well but for now we will look into the basics only.",
                type: "paragraph",
            },
            {
                content:
                    "Let us consider the following html for examples below:",
                type: "paragraph",
            },
            {
                content: `<p> I prefer tv series over movies. </p>`,
                type: "code",
            },
            {
                content:
                    "The different ways to select and apply css are as follow:",
                type: "paragraph",
            },
            {
                content: `p{
    color: blue;
}`,
                type: "code",
            },
            {
                content:
                    "<p style='color:blue'> I prefer tv series over movies. </p> <br />",
                type: "codeOutput",
            },

            {
                content: `#movieSeriesParagraph{
    color: red;
}`,
                type: "code",
            },
            {
                content:
                    "<p style='color:red'> I prefer tv series over movies. </p> <br />",
                type: "codeOutput",
            },

            {
                content: `.myParagraph{
    color: brown;
}`,
                type: "code",
            },
            {
                content:
                    "<p style='color:brown'> I prefer tv series over movies. </p> <br />",
                type: "codeOutput",
            },

            {
                content: [
                    "p = Tag Selector. Applies css to all tags.",
                    ".para = Class Selector. Applies css to all elements containing that class.",
                    "#aboutPara = ID Selector. Applies css to tag containing that id",
                ],
                type: "list",
            },
            {
                content: {
                    task: "Write a css rule that targets the heading 3 element having class of 'myHeading' and change the color to red(<h3 class='myHeading>)",
                    answer: {
                        pattern:
                            "^\\s*.myHeading\\s*{\\s*color\\s*:\\s*red\\s*;\\s*}\\s*$",
                        text: `
.myHeading{
    color: red;
}`,
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                code: "<h3 class='myHeading'>Artists that I like</h3><p>I like the following artists <ul><li>Vance Joy</li><li>Rainbow Kitten Suprise</li><li>Tribe Called Quest</li></ul></p>",
                type: "output",
            },
        ],
    },
    {
        title: "3. Colors",
        body: [
            {
                content:
                    "Colors are specified using predefined color names, RGB, HEX, HSL, RGBA and HSLA values. In the previous two chapters, you have already used colors by predefined values ('red', 'blue', etc). In this tutorial we will be looking into colors by name, rgb and hex values.",
                type: "paragraph",
            },
            {
                content: `<label id='name'> Name </label> `,
                type: "code",
            },
            {
                content: `<label id='rgb'> RGB </label> `,
                type: "code",
            },
            {
                content: `<label id='hex'> Hex </label> `,
                type: "code",
            },
            {
                content: `#name{
    color:blue;
}
#rgb{
    color: rgb(255,0,0);
}
#hex{
    color: #964B00;
}`,
                type: "code",
            },
            {
                content:
                    "<label style='color: blue'> Name </label> <label style='color: rgb(255,0,0)'> RGB </label> <label style='color: #964B00'> Hex </label>",
                type: "codeOutput",
            },
            {
                content: [
                    "Name = Color Name. However, the color name must be selected from predefined set of colors. (that color name must exist)",
                    "RGB = An RGB value of a color (red, green, blue). It is written as rgb(red, green, blue). Values must be between 0 and 255.",
                    "Hex = An Hexadecimal value of a color. It is written as # followed by six values. Each two values represent red, green and blue.",
                ],
                type: "list",
            },
            {
                content:
                    "You can search for rgb values or hex values of a color by searching it on the internet. You can try google's color picker which will give you these data. Click <a target='_blank' href='https://www.google.com/search?q=google+color+picker&sxsrf=AJOqlzUKQM8mDD5Q-HjksULm_EzM4tBrLg%3A1679205970179&ei=UqYWZMDJCqyN3LUPhoWGyA8&ved=0ahUKEwjAuu3aqef9AhWsBrcAHYaCAfkQ4dUDCA8&uact=5&oq=google+color+picker&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzINCAAQDRCABBCxAxCDATIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgcIABANEIAEMgcIABANEIAEOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAJKBAhBGABQmwVY0AlgjQxoAXABeACAAagBiAG5CJIBAzAuN5gBAKABAcgBEcABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp'>here</a> for google's color picker.",
                type: "codeOutput",
            },
            {
                content: {
                    task: "Write a css rule that targets the paragraph element (<p> tag) and make the color to red. This must be done using hexadecimal(hex) value of the color.",
                    answer: {
                        pattern:
                            "^\\s*p\\s*{\\s*color\\s*:\\s*#FF0000\\s*;\\s*}\\s*$",

                        text: `
p{
    color: #FF0000;
}`,
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                code: "<h1>Cow</h1><p>Cow goes moo.</p>",
                type: "output",
            },
        ],
    },
    {
        title: "4. Background",
        body: [
            {
                content:
                    "The background properties in css are used to add background effects for an element. These effects inclde addign an background image or color to an element. We will only be focusing on these properies in this tutorial.",
                type: "paragraph",
            },
            {
                content: `<h2> This is heading two </h2>`,
                type: "code",
            },
            {
                content: `h2{
    color: orange;
    background-color: grey;
}`,
                type: "code",
            },
            {
                content:
                    "<h2 style='color:orange; background-color: grey'>This is heading two</h2>",
                type: "codeOutput",
            },
            {
                content:
                    "Background color is similar to color property. Color changes the text/font color wheras background-color changes the background color of an element.",
                type: "paragraph",
            },
            {
                content: `h2{
    color: white;
    background-image: url('image url here');
}`,
                type: "code",
            },
            {
                content:
                    "<h2 style='color:white; background-image: url(https://freedesignfile.com/upload/2012/09/00229887_medium62.jpg)'>This is heading two</h2>",
                type: "codeOutput",
            },
            {
                content:
                    'Background-image changes the background image of an element. The url/path of the image must be valid in order for image to appear and must be enclosed within quotes(" ")',
                type: "paragraph",
            },
            {
                content: {
                    task: "Write a css rule that targets the paragraph element (<p> tag) and make the background color red and text color to black. ",
                    answer: {
                        pattern:
                            "^\\s*p\\s*{\\s*color\\s*:\\s*white\\s*;\\s*background-color\\s*:\\s*grey\\s*;\\s*}\\s*$",
                        text: `p {
    color: white;
    background-color: grey;
}`,
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                code: "<h1>Duck</h1><p>I like ducks. Ducks go 'quack quack'.</p>",
                type: "output",
            },
        ],
    },

    {
        title: "5. Width, Height",
        body: [
            {
                content:
                    "In CSS, the width property is used to define the width of an element, and the height property is used to define the height of an element. Both properties can be set in various units, such as pixels (px), percentages (%), ems (em), and viewport units (vw and vh).",
                type: "paragraph",
            },
            {
                content: `<h2> Heading 2 </h2>`,
                type: "code",
            },
            {
                content: `label{
    background-color: grey;
    width: 200px;
    height: 100px;
}`,
                type: "code",
            },
            {
                content:
                    "<h2 style='color:orange; background-color: grey; width: 200px; height: 100px'; >Heading 2</h2>",
                type: "codeOutput",
            },
            {
                content:
                    "As you might have noticed, the dimentions of the heading (h2) have been changed. Using width and height properties, dimention was manipulated.",
                type: "paragraph",
            },
            {
                content: {
                    task: "Write a css rule that changes the dimention of an image to 100x100 pixels (100px x 100px). Use the image tag selector (img). ",
                    answer: {
                        pattern:
                            "^\\s*img\\s*{\\s*width\\s*:\\s*250px\\s*;\\s*height\\s*:\\s*250px\\s*;\\s*}\\s*$",
                        text: `img {
    width: 250px;
    height: 250px;
}`,
                    },
                },
                type: "task",
                width: "60%",
            },
            {
                code: "<img src='https://rb.gy/jrlbdd' alt='A beautiful landscape' />",
                type: "output",
            },
        ],
    },
];
