// const Each = function(arr, fn) {
//   return arr.forEach(fn);
// };

// const ajaxFetch = function(url, cb, method = "GET") {
//   const xhr = new XMLHttpRequest(); // ready state 0

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== 4) {
//       return; // Nothing to do yet so exit the function.
//     }
//     cb(JSON.parse(xhr.response));
//   };

//   xhr.open(method, url); // ready state 1
//   xhr.send(); // Asynchronous // ready state 2 and 3 and 4
// };

// $("#submitBook").click(function(e) {
//   $("#app").html("");

//   let gBooksUrl = `https://www.googleapis.com/books/v1/volumes?q=title:${$(
//     "#book"
//   ).val()}`;

//   e.preventDefault();

//   ajaxFetch(gBooksUrl, function(res) {
//     const books = res.items;
//     //$("#app").html(JSON.stringify(books[0].volumeInfo.imageLinks.thumbnail));
//     //console.log(res.items[0].volumeInfo.imageLinks.thumbnail);

//     Each(books, x =>
//       $("#app").append(`<img src="${x.volumeInfo.imageLinks.thumbnail}"></img>`)
//     );
//   });
// });


// d98e7b2d37fbd7b63a3ae50925548d3f
// $.ajax('http://api.openweathermap.org/data/2.5/weather?q=sydney&APPID=d98e7b2d37fbd7b63a3ae50925548d3f')
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d98e7b2d37fbd7b63a3ae50925548d3f
// https://openweathermap.org/current#data