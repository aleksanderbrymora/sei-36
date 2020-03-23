const singleBook = function() {
    document.getElementById("single_result").innerHTML = "";
    const bookId = this.getAttribute("book_id");
    const xhr = new XMLHttpRequest();
    const divToAppend = document.getElementById("single_result");
    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4){return};
        const data = JSON.parse( xhr.responseText );
        const title = document.createElement("h1");
        title.innerHTML = data.volumeInfo.title;
        const img = document.createElement("img");
        img.src = data.volumeInfo.imageLinks.thumbnail;
        const descript = document.createElement("p")
        descript.innerHTML = `<strong>Description: </strong>${data.volumeInfo.description}`;
        const publisher = document.createElement("p");
        publisher.innerHTML = `<strong>Published by: </strong>${data.volumeInfo.publisher}`;
        const publishDate = document.createElement("p");
        publishDate.innerHTML = `<strong>Published on: </strong>${data.volumeInfo.publishedDate}`;

        divToAppend.appendChild(title);
        divToAppend.appendChild(img);
        divToAppend.appendChild(descript);
        divToAppend.appendChild(publisher);
        divToAppend.appendChild(publishDate);
    };
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes/${bookId}`);
    xhr.send();
};

const bookSearch = function() {
    const resultsDiv = document.getElementById("results")
    resultsDiv.innerHTML = "";
    document.getElementById("single_result").innerHTML = "";
    const searchPhrase = document.getElementById("search_words").value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4){return};
        const data = JSON.parse( xhr.responseText );
        data.items.forEach(book => {
            const bookCover = book.volumeInfo.imageLinks.thumbnail;
            const bookTitle = book.volumeInfo.title;
            const anchor = document.createElement("a");
            anchor.classList.add("single_book_click");
            anchor.setAttribute("book_id", `${book.id}`);
            const img = document.createElement("img");
            img.src = bookCover;
            img.title = bookTitle;
            anchor.appendChild(img);
            resultsDiv.appendChild(anchor);
        });
        const singleBooks = document.getElementsByClassName("single_book_click");
        Array.from(singleBooks).forEach(book => {
            book.addEventListener('click', singleBook);
        });
    };
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${searchPhrase}&maxResults=35`);
    xhr.send();
};

document.getElementById("search_button").addEventListener('click', bookSearch);
