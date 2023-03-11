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
                content:
                    "We will learn about elements in the next chapter so these might not make sense at the moment.",
                type: "paragraph",
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
        title: "3. Elements - Overview",
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
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]<html>[\\s\\S]<head>[\\s\\S]<title>[\\s\\S]*?<\\/title>[\\s\\S]<\\/head>[\\s\\S]<body>[\\s\\S]*?<p>Today I learned about elements<\\/p>[\\s\\S]*?<\\/body>[\\s\\S]<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
    <head>
        <title>Overview</title>
    </head>
    <body>
                                                        
    </body>
</html>`,
                        value: `<!DOCTYPE html> 
<html>
    <head>
        <title>Page Title</title>
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
    {
        title: "4. Elements - Paragraph",
        body: [
            {
                content:
                    "A paragraph is a block of text that starts on a new line. They are defined with <p> tag.",
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
                    prefix: "<h1>",
                    suffix: "</h1>",
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
    {
        title: "5. Elements - Heading",
        body: [
            {
                content:
                    "HTML headings are titles or subtitles that you want to display on a webpage. They are defined with the <h1> to <h6> tags. As the heading number increase (1 to 6) the font size decreases. This means that h1 is bigger in size than h6. It can be written as follows:",
                type: "paragraph",
            },
            {
                content: "<h1> Heading One </h1>  ",
                type: "code",
            },
            {
                content:
                    "<h1> Heading 1</h1> <h2>Heading 2</h2> <h3>Heading 3</h4> <h4>Heading 4</h4> <h5>Heading 5</h5> <h6>Heading 6 </h6>",
                type: "codeOutput",
            },

            {
                content:
                    "You have somewhat already used <h1> in previous chapters. In fact, the chapter title (5. Elements - Heading) is written using <h2> tag",
                type: "paragraph",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of two headings (size 3) and (size 2). The heading should have text of 'My Pet Cat' and 'My Pet Dog' ",
                    prefix: "<h1>",
                    suffix: "</h1>",
                    answer: {
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]<html>[\\s\\S]<head>[\\s\\S]<title>[\\s\\S]*?<\\/title>[\\s\\S]<\\/head>[\\s\\S]<body>[\\s\\S]*?<h3>My Pet Cat<\\/h3>[\\s\\S]<h2>My Pet Dog<\\/h2>[\\s\\S]*?<\\/body>[\\s\\S]<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
    <head>
        <title>Heading</title>
    </head>
    <body>
        <h3>My Pet Cat</h3>
        <h2>My Pet Dog</h2>
    </body>
</html>`,
                        value: `<!DOCTYPE html> 
<html>
    <head>
        <title>Heading</title>
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
    {
        title: "6. Attributes",
        body: [
            {
                content:
                    "In HTML, attributes are additional pieces of information you can add to an HTML element. Attributes provide extra information about the element, such as its behavior, appearance, or relationship to other elements on the page.",
                type: "paragraph",
            },
            {
                content:
                    "HTML attributes are always included in the opening tag of an element, and they are written as name-value pairs. The attribute name is written first, followed by an equal sign and then the attribute value, which is enclosed in quotation marks. An example of html attribute is as follows :",
                type: "paragraph",
            },
            {
                content: "<p id='my-paragraph'> Heading One </p>  ",
                type: "code",
            },
            {
                content:
                    "In the example, <p> tag has an attribute of 'id' with value 'my-paragraph'. In this case, we are giving <p> tag with a unique identification name. Later on, when we search for my-heading, it will refer to this <p> element",
                type: "paragraph",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of a heading (size 2) with content 'Chapter Size'. Additionally, add an attribute of class with value 'my-heading' ",
                    prefix: "<h1>",
                    suffix: "</h1>",
                    answer: {
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]<html>[\\s\\S]<head>[\\s\\S]<title>[\\s\\S]*?<\\/title>[\\s\\S]<\\/head>[\\s\\S]<body>[\\s\\S]*?<h2 class='my-heading'>Chapter Six<\\/h2>[\\s\\S]<\\/body>[\\s\\S]<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
    <head>
        <title>Attributes</title>
    </head>
    <body>
        <h2 class='my-heading'>Chapter Six</h2>                                       
    </body>
</html>`,
                        value: `<!DOCTYPE html> 
<html>
    <head>
        <title>Attributes</title>
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
    {
        title: "7. Elements - Image",
        body: [
            {
                content:
                    "An image in HTML is an element that displays a visual representation of something, such as a photograph, a graphic, or an illustration. It is represented by an <img> tag. It is written as follows:",
                type: "paragraph",
            },
            {
                content:
                    "<img src='https://rb.gy/jrlbdd' alt='A beautiful landscape' />",
                type: "code",
            },
            {
                content:
                    "<br /><img src='https://rb.gy/jrlbdd' alt='A beautiful landscape' style= 'width: 300px' />",
                type: "codeOutput",
            },
            {
                content: [
                    "src - source (url) of the image",
                    "alt - alternative text that describes image. In case image fails to load, alt text is displayed",
                ],
                type: "list",
            },
            {
                content:
                    "If you noticed, the <img> element does not have a closing </img> tag. It's because its a self closing element and will have a single tag that represents opening and closing tag which is <img />. Along with <img> there are several other elements that are self closing",
                type: "paragraph",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of a image of any of your choice ",
                    prefix: "<h1>",
                    suffix: "</h1>",
                    answer: {
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]*?<html>[\\s\\S]*?<head>[\\s\\S]*?<title>[\\s\\S]*?<\\/title>[\\s\\S]*?<\\/head>[\\s\\S]*?<body>[\\s\\S]*?<img\\s+src=['\"]([^'\"]*)['\"]\\s+alt=['\"]([^'\"]*)['\"]\\s*\\/?>(?![^<]*>)?[\\s\\S]*?<\\/body>[\\s\\S]*?<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
    <head>
        <title>images</title>
    </head>
    <body>
       <img src='https://rb.gy/jrlbdd' alt='Cat Image'>                                         
    </body>
</html>`,
                        value: `<!DOCTYPE html> 
<html>
    <head>
        <title>images</title>
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
    {
        title: "8. Elements - Hyperlink",
        body: [
            {
                content:
                    "A Hyperlink is a clickable link that takes the user to another web page. It is represented by an <a> tag. The text or image between the opening <a> and closing </a> tags becomes clickable. It is written as follows:",
                type: "paragraph",
            },
            {
                content:
                    "<a href='https://www.google.com/' target='_blank'>Click me for google</a>",
                type: "code",
            },
            {
                content:
                    "<br/> <a href='https://www.google.com/' target='_blank'>Click me for google</a> <br />",
                type: "codeOutput",
            },
            {
                content:
                    "The href attribute in HTML specifies the hyperlink reference for an <a> element, which determines where the link will take the user when clicked. It is used to specify the URL of the target webpage or the location within the same webpage that the link should navigate to.",
                type: "paragraph",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of a hyperlink that points to Youtube(https://www.youtube.com/). It should have text of 'Click me to go to youtube' ",
                    prefix: "<h1>",
                    suffix: "</h1>",
                    answer: {
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]*?<html>[\\s\\S]*?<head>[\\s\\S]*?<title>[\\s\\S]*?<\\/title>[\\s\\S]*?<\\/head>[\\s\\S]*?<body>[\\s\\S]*?<a\\s+href=['\"]([^'\"]*)['\"]\\s+target='_blank'>Click me to go to youtube</a>[\\s\\S]<\\/body>[\\s\\S]*?<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
    <head>
        <title>Hyperlink</title>
    </head>
    <body>
    <a href='https://www.youtube.com/' target='_blank'>Click me to go to youtube</a>                                          
    </body>
</html>`,
                        value: `<!DOCTYPE html> 
<html>
    <head>
        <title>Hyperlink</title>
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
    {
        title: "9. Nesting",
        body: [
            {
                content:
                    "When an element is contained inside another element, it is considered the child of that element. This is known as Element Nesting. Since there can be multiple levels of nesting, this analogy can be extended to grandchildren, great-grandchildren, and beyond. This is done by writing the nested element's code between the opening and closing tags of the outer element.",
                type: "paragraph",
            },
            {
                content:
                    "Click <a href='https://www.google.com' target='_blank'>Here</a> for google.</p>",
                type: "code",
            },
            {
                content:
                    "<br /> Click <a href='https://www.google.com' target='_blank'>Here</a> for google.</p>",
                type: "codeOutput",
            },
            {
                content:
                    "It is important to note that when nesting elements, you need to make sure that the nested elements are properly closed in the correct order. For example, if you nest an <a> element inside a <p> element, you need to close the <a> element before closing the <p> ",
                type: "paragraph",
            },
            {
                content: {
                    task: "Compose an HTML document that consists of a hyperlink that has a paragraph of text with content 'I like watching youtube videos'. The link should point to Youtube(https://www.youtube.com/).",
                    prefix: "<h1>",
                    suffix: "</h1>",
                    answer: {
                        pattern:
                            "^<!DOCTYPE html>[\\s\\S]*?<html>[\\s\\S]*?<head>[\\s\\S]*?<title>[\\s\\S]*?<\\/title>[\\s\\S]*?<\\/head>[\\s\\S]*?<body>[\\s\\S]*?<a\\s+href=['\"]([^'\"]*)['\"]\\s+target='_blank'>[\\s\\S]*?<\\/p>[\\s\\S]*?<\\/a>[\\s\\S]*?<\\/body>[\\s\\S]*?<\\/html>$",
                        text: `
<!DOCTYPE html> 
<html>
    <head>
        <title>Nested</title>
    </head>
    <body>
    <a href='https://www.youtube.com/' target='_blank'>
        <p>I like watching youtube videos</p>
    </a>                                          
    </body>
</html>`,
                        value: `<!DOCTYPE html> 
<html>
    <head>
        <title>Nested</title>
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
