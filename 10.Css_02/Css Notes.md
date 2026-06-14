1.Css variable
2.Emmiet
3.Google fonts
4.BEM Element
5.Css Grid
6.Git Hub Pages - deploy index,style file in the git hub by making the new repo.
7.Css -Layout 1,2,3 Practice with some extension dowload lke colorzilla ,Download all etc

Here is the exact syntax for each of the three CSS styling methods.

## 1. Inline CSS Syntax

Place the style attribute inside the opening tag of any HTML element.

<element style="property: value; property: value;">Text Content</element>

Real Example:

<p style="color: blue; font-size: 16px; font-weight: bold;"> This text is blue and bold.</p>

---

## 2. Internal CSS Syntax

Place the <style> tag inside the <head> section of your HTML document.

<!DOCTYPE html>
<html>
<head>
    <style>
        selector {
            property: value;
            property: value;
        }
    </style>
</head>
<body>
    <!-- Your HTML elements go here -->
</body>
</html>

Real Example:

<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: green;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>This heading is green and centered.</h1>
</body>
</html>

---

## 3. External CSS Syntax

This method requires two separate files linked together.

## File 1: The HTML File (index.html)

Link the CSS file using the <link> tag inside the <head> section.

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="filename.css">
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</body>
</html>

## File 2: The CSS File (filename.css)

Write only the CSS rules. Do not include any HTML tags like <style> in this file.

h1 {
color: darkblue;
}

p {
font-family: Arial, sans-serif;
line-height: 1.5;
}

Styling in CSS can be done in three primary ways: Inline CSS, Internal (Embedded) CSS, and External CSS.
Here is a breakdown of how each method works according to standard web development practices documented by platforms like MDN Web Docs:

1. Inline CSS
   This method applies styles directly to a specific HTML element using the attribute.

• Scope: Affects only the single element where it is placed.
• Example:  
• Best used for: Quick testing or overriding specific styles locally.

2. Internal (Embedded) CSS
   This method places the CSS rules inside a tag, which is located within the section of your HTML document.

• Scope: Affects all matching elements on that single HTML page.
• Example:
• Best used for: Single-page websites or unique, page-specific layouts.

3. External CSS
   This method involves writing all your CSS rules in a completely separate file with a extension. You then link this file to your HTML document using a tag inside the block.

• Scope: Can style multiple pages or an entire website at once.
• Example:  
• Best used for: Large, multi-page websites. This is the most industry-standard method because it keeps code organized and improves page loading speeds.

Cascading Priority Rule
If you apply conflicting styles using all three methods, the browser uses a Cascading Order Hierarchy to decide which one wins:

1. Inline CSS (Highest priority; overrides others)
2. Internal CSS
3. External CSS (Lowest priority)

8.MERN...
