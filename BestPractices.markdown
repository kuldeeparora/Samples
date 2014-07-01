### BASICS
Browser Support
For IE, we most typically support versions 8+. There may be exceptions, given regional markets and their particular metrics, or client mandates.
Indentation
For all code languages, we require indentation to be done via tab. Hitting Tab in your code editor should be equivalent to four spaces.
Readability vs. Compression
We prefer readability over file-size savings when it comes to maintaining existing files. For production versions of CSS and JavaScript files, we deploy them minified using grunt & assetic.

MARKUP
We test our markup against the W3C validator, to ensure that the markup is well formed. 100% valid code is not a goal, but validation certainly helps to write more maintainable sites as well as debugging code.

Style Guide & Markup Best Practices

All tags should be lowercase.
Attribute values should be quoted using double quotes.
Indentation should follow the structure of the markup (child is indented from parent), except in the case of the <body> element, which needs no indentation.
Avoid extra line breaks between one element’s closing tag and another element’s opening tag.
Do not use all caps or all lowercase titles in markup, instead apply the CSS property text-transform.
Use HTML entities when appropriate.
For tags that are self-closing, the forward slash should have exactly one space preceding it <br /> vs. the compact but incorrect <br/>. The W3C specifies that a single space should precede the self-closing slash (source).
Items in list form should always be housed in a <ul>, <ol>, or <dl>, never a set of <div>s or <p>s.
Use the <label> element to label each form field, the for attribute should associate itself with the input field, so users can click the labels. If the form label and input are wrapped in a <label> element, the association is inherit and the for attribute is not required.
For tabular data, make use of <thead>, <tbody>, <tfoot>, and <th> elements (and the scope attribute) when appropriate.
CSS
Style Guide
Selectors should be lowercase using hyphens where applicable.
Order properties alphabetically with each property on it’s own line. The exception to this is vendor-prefixed properties, which should be preceded by a line break and come after all standard properties.
Declarations (property: value) should be indented.
Group rules into logical sections using comment headings. We use up to three levels of comment headings, with each sub-level relating to the parent
Top level comment headings should be preceded by two line breaks. All other comment headings should be preceded by one line break.
Rules should be ordered by their specificity as much as possible
For calculated length units like em, include a comment with the px equivalent.
Selectors within rules that have multiple selectors should each be on their own line for better readability.
Zero values should have no length unit (e.g. 0 instead of 0px).
Avoid using keywords for position values (e.g. background-position: 100% 0; instead of background-position: right top;)
Keywords for color values should never be used. Instead use hex, rgba or hsla.
Letters in hex values should be lowercase (e.g. #bada55 instead of #BADA55)

/* -- elements -- */
body {
    font-size: 12px;
    line-height: 1.5em; /* 18px */
}
p {
    margin: 0 0 1em;
}
input {
    background-color: #fff;

    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}


/* -- content -- */
.main-content {
    padding: 20px;
}


/* -- nav -- */
.nav > li {
    float: left;
}
.nav-link {
    outline: 0;
}

/* - nav: global - */
.nav-global .nav-link {
    background-image: url(/img/nav/global.png);
    display: block;
}
#nav-work > a {
    background-position: -100px 0;
}
#nav-about > a {
    background-position: -200px 0;
}
#nav-contact > a {
    background-position: -300px 0;
}

/* nav: global: hover/focus */
#nav-work > a:hover,
#nav-work > a:focus {
    background-position: -100px -100px;
}
#nav-about > a:hover,
#nav-about > a:focus {
    background-position: -200px -100px;
}
#nav-contact > a:hover,
#nav-contact > a:focus {
    background-position: -300px -100px;
}
Length Units
Decimal Values
For length units that require decimal values, round to the 4 decimal places where applicable. We’ve found this to be the sweet spot for cross-browser consistency. If a decimal unit is less than 0, omitting the 0 is preferred (e.g. .5em instead of 0.5em).
Pixels vs. Ems
We use the px length unit define font size, because it offers absolute control over text (We also dig the rem unit). We realize that using the em length unit for font sizing used to be popular to accommodate for IE 6 not resizing pixel based text. However, all major browsers (including IE 7+) now support text resizing of pixel units and/or full-page zooming. Since IE 6 is largely considered deprecated, pixels (or rems) are preferred.
Unit-less line-height is preferred because it does not inherit a percentage value of its parent element, but instead acts as a multiplier of the font-size. The exception to this rule is the body element, where em-based line-height is preferred to set the most common line-height value for the site.
Correct
body {
    font-size: 12px;
    line-height: 1.5em; /* 18px */
}
.intro {
    font-size: 13px;
    line-height: 1.5385; /* 20px */
}

Incorrect
body {
    font-size: 12px;
    line-height: 1.5; /* 18px */
}
.intro {
    font-size: 0.813em; /* 13px only if the browser default is 16px */
    line-height: 1.5385; /* 20px */
}
Images
Never use spacer images
Use CSS sprites generously. They make hover states easy, improve page load time by reducing the number of HTTP requests.
Use SASS Sprites for background position.
Logos should be embedded using inline images. This is done primarily as a branding effort, so the logo can be included when printing a page.

Internet Explorer Bugs
It’s almost a guarantee that Internet Explorer will introduce a few nonsensical bugs into your UI. While we encourage troubleshooting and building code that will work in all browsers without special modifications, sometimes it is necessary to use IE-specific CSS. To accommodate this, we add CSS classes on the <html> element with conditional comments for each applicable IE version. These styles should be stored in an IE stylesheet, again served via conditional comments.
IE-specific CSS should rarely ever be mixed with existing rules in any stylesheet that is served to all browsers.
Unsupported versions of IE
For unsupported versions of IE we want the content to be accessible, but don’t want the site to look broken. To achieve this, these users view the site in an unstyled state, with a message explaining that their browser is unsupported. Conditional comments again to the rescue, serving up the ie-legacy.css stylesheet.
HTML
<html>
<!--[if lt IE 8 ]><html class="no-js lt-ie8" lang="en"><![endif]-->
<!--[if IE 8 ]><html class="no-js ie8" lang="en"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html class="no-js" lang="en"><!--<![endif]-->


<head>
    <link href="/css/screen.css" rel="stylesheet" />
</head>

CSS
#list-upcoming .episode-info {
    padding: 8px 56px 0 0;
    width: 560px;
}
.lt-ie8 #list-upcoming .episode-info {
    width: 504px;
}
Important CSS Best Practices
We strive to maintain proper separation of content and design, and therefore highly discourage the use of inlinestyle="…" attributes. This not only makes maintenance a nightmare, but inextricably ties the presentation to the data it represents.
CSS should be added through external files, minimizing the number of files, when possible. It should always be linked to in the <head> element.
Avoid giving elements a fixed height, except in cases where the height is calculated via JavaScript, or when using image replacement. Elements should be able to flex vertically and respond to additional content or larger font sizes.
The !important keyword should be avoided, unless absolutely necessary (e.g. overriding an inline style added by 3rd party JavaScript or UI state classes like .s-hidden).
Include a CSS reset at the beginning of the main stylesheet. We have developed our own version of CSS reset, which is based on Eric Meyer’s reset and included in our starter template.
Understand cascading and selector specificity so you can write terse and effective code.
Write selectors that are optimized for speed and avoid expensive css selectors.
Avoid the * wildcard selector most of the time.
Don’t tag qualify selectors (e.g. div.results) unless it’s necessary for specificity.
More on writing efficient CSS on the MDC
JAVASCRIPT
Style Guide
We follow the jQuery Core Style Guidelines.
All JavaScript variables shall be written in camelCase.
All Boolean variables should start with "is" and test for positive conditions (e.g. isValid = (test.value >= 4 && test.success);.
Name variables and functions logically: For example, popUpWindowForAd rather than myWindow.
Constants or configuration data (like animation durations, etc.) should be at the top of the file.
Large blocks of code should be separated by flowerbox comments to indicate chapters of the file.
All comments should be preceded by an extra line break.
Documentation style should follow JSDoc structure
The Module Pattern
For consistency we use the module pattern for building classes and for namespacing purposes. This is the preferred way to write JavaScript at Substance. The module pattern allows for greater encapsulation of your code, avoiding possible conflicts with any other JavaScript on the page and creating a more organized set of classes to work with. Truly private and public methods are achievable this way, which is nice. The following is an example of a class substance with a public method init.
var substance = function () {

    function init() {

    }

    return {
        init: init
    };
}();

Avoid Heavy Nesting
a. Code gets unreadable after a certain level of nesting.
b. A really bad idea is to nest loops inside loops as that also means taking care of several iterator variables (i,j,k,l,m...).
Optimize Loops
a. Don’t make JavaScript read the length of an array at every iteration of a for loop. Store the length value in a different variable.
b. Keep computation-heavy code outside of loops. This includes regular expressions but first and foremost DOM manipulation.
c. You can create the DOM nodes in the loop but avoid inserting them to the document.
Keep DOM Access to a Minimum
a. If you can avoid it, don’t access the DOM.
b. Seed the dataset with as much as you can and then call the method to render all out in one go.
Reason: It’s slow and there are all kinds of browser issues with constant access to and changes in the DOM.
Solution: Write or use a helper method that batch-converts a dataset to HTML.
Don’t Yield to Browser Whims
a. Instead of relying on flaky browser behavior and hoping it works across the board...
b. Avoid hacking around and analyze the problem in detail instead.
c. Most of the time you’ll find the extra functionality you need is because of bad planning of your interface.
Don’t Trust Any Data
a. Don’t believe the HTML document - Any user can meddle with it for example in Firebug.
b. Don’t trust that data reaches your function is of the right format. - Test with typeof and then do something with it.
c. Don’t expect elements in the DOM to be available. - Test for them and that they indeed are what you expect them to be before altering them.
d. Never ever use JavaScript to protect something. - JavaScript is as easy to crack as it is to code :)
Add Functionality with Javascript Not Content
a. If you find yourself creating lots and lots of HTML in JavaScript, you might be doing something wrong.
b. It is not convenient to create using the DOM, it’s flasky to use innerHTML (IE’s Operation Aborted error), and it’s hard to keep track of the quality of the HTML you produce.
c. If you really have a massive interface that should only be available when JavaScript is turned on, load the interface as a static HTML document via Ajax.
d. That way you keep maintenance in HTML and allow for customization.
Build on the Shoulders of Giants
a. Javascript is fun, but writing JavaScript for browsers is less so... start with a good library.
b. JavaScript libraries are specifically built to make browsers behave and you code more predictable by plugging browser holes.
c. Good libraries help you write code that works without keeping the maintenance overhead of supporting current browsers and those to come.
Development Code is Not Live Code
a. Live code is written for machines. Development code is written for humans.
b. Collate, minify and optimize your code in a build process.
c. Don’t optimize prematurely and punish your fellow developers and those who have to take over from them.
d. If we cut down on the time spent coding we have more time to perfect the conversion to machine code.
