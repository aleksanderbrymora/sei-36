// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


const favoriteRecipe = {
  title: "Takoyaki",
  serves:2,
  ingredients:["octpus","flower","oil","cabbage","leek"]
};


console.log(favoriteRecipe.title);
console.log('serves: ' + favoriteRecipe.serves);
console.log('ingredients:');
for (let i = 0; i < favoriteRecipe.ingredients.length; i++) {
    console.log(favoriteRecipe.ingredients[i]);
}

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
const books = [
  {title:"The theory of the world",
   author:"ainsshutain",
   alreadyRead:true
  },

  {title:"The shakeespear",
   author:"shakeespear",
   alreadyRead:false
  },

  {title:"The magic of the world",
   author:"Yukiko",
   alreadyRead:true
  }];

for ( let i = 0; i < books.length; i++){
  let x = books[i];

  if(x.alreadyRead) {
    console.log(`You already have read ${x.title} by ${x.author}`);
  } else {
    console.log(`You still need to read ${x.title} by ${x.author}`);
  }

};


// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".



// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
