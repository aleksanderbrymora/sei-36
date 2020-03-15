// # Exercises: Objects
//
// ## The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// - Mole
// - Serves: 2
// - Ingredients:
// - cinnamon
// - cumin
// - cocoa
//
// ## The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const library = [{
  title : "The book",
  author: "the author",
  read :true
},{
  title : "The book1",
  author: "the author1",
  read :false
},{
  title : "The book2",
  author: "the author2",
  read :true
}];


for (let i=0;i<library.length;i++){
  console.log(library[i].title + ' by ' +library[i].author)
};

for (let i=0;i<library.length;i++){
  if (library[i].read == true){ // works fine 'if (library[i].read) == true is optional'
    console.log('you already read '+ library[i].title + ' by ' +library[i].author)
  }else{
  console.log('you need to read ' + library[i].title + ' by ' +library[i].author) // how to write this without using else
  }
};

// ## The Movie Database
//
// It's like IMDB, but much much smaller!
//
// - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
//
const favMovies = [{
  title : 'the jurrasic park',
  duration : '45 mins',
  stars : ['murray','julian','georgie']
},{
  title : 'the jumanji',
  duration : '125 mins',
  stars : ['robinay','megane','dwayne']
},{
  title : 'the Hobbit',
  duration : '145 mins',
  stars : ['eva','laura','alex']
}
];
const movieSynop = function(title){
  for (let i=0;i<favMovies.length;i++){
    if (title == favMovies[i].title){
      console.log(`${favMovies[i].title} lasts for ${favMovies[i].duration}. starring: ${favMovies[i].stars}`);
    }else{
      console.log("movie not found");
    }
  }
};

movieSynop('the Hobbit');
//
const recipe = {
  title : 'coffee',
  serves : 3,
  ingredients : ['clove','cinnamon','cumin','coffeePowder']
  }

  console.log(recipe);
