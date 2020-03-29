const book = function () {
    let bookWord = document.getElementById('cover').value
    const gbook = new XMLHttpRequest();
    gbook.open( "GET", `https://www.googleapis.com/books/v1/volumes?q=title:${ bookWord }`);
    gbook.send();
    gbook.onreadystatechange = function () {
        if ( gbook.readyState !== 4 ) {
            return;
        }
        const data = JSON.parse( gbook.responseText );
        const booktitle = data.items[0].volumeInfo.title
        const bookStory = data.items[0].volumeInfo.imageLinks.thumbnail
        const bookauthor = data.items[0].volumeInfo.authors

        const t = document.createElement('p');
        t.innerHTML = booktitle;
        document.body.appendChild(t);

        const img = document.createElement("img");
        img.src = bookStory;
        document.body.appendChild(img);

        const a = document.createElement('p');
        a.innerHTML = bookauthor;
        document.body.appendChild(a);
        };
    };

    document.getElementById('bookinfo').addEventListener('click', book);



