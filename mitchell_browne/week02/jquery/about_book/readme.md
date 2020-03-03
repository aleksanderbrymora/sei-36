# Exercises: More DOM Manipulation

## About Me

Start with this HTML and save it as "aboutme.html":
```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>

  <ul>
    <li>Nickname: <span id="nickname"></span>
    <li>Favorites:  <span id="favorites"></span>
    <li>Hometown: <span id="hometown"></span>
   </ul>

 </body>
</html>
```

- Create a new Javascript file and link to it with a script tag at the bottom.
- (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
- (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
- Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
- Create a new img element and set its src attribute to a picture of you. Append that element to the page.

## The Book List

Keep track of which books you read and which books you want to read!

- Create a webpage with an h1 of "My Book List".
- Create a new Javascript file and link to it with a script tag at the bottom.
- Copy this array of books:
```javascript
var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];
```
- Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
- Bonus: Use a ul and li to display the books.
- Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
- Bonus: Change the style of the book depending on whether you have read it or not.
