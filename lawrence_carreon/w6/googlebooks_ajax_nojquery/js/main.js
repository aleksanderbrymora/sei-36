const bookSearch = function() {
    const resultsDiv = document.getElementById("results")
    resultsDiv.innerHTML = "";
    const searchPhrase = document.getElementById("search_words").value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4){return};
        const data = JSON.parse( xhr.responseText );
        data.items.forEach(book => {
            const bookCover = book.volumeInfo.imageLinks.thumbnail;
            const bookTitle = book.volumeInfo.title;
            const img = document.createElement("img");
            img.src = bookCover;
            img.title = bookTitle;
            resultsDiv.appendChild(img);
        });
    };
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${searchPhrase}&maxResults=20`);
    xhr.send();
};

document.getElementById("search_button").addEventListener('click', bookSearch);


