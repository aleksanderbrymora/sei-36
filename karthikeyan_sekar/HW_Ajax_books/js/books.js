const fetchFact = function () {
  const xhr = new XMLHttpRequest(); // ready state 0

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Nothing to do yet so exit the function.
    }

    // console.log(xhr.responseText);

    const data = JSON.parse( xhr.responseText );

    const p = document.createElement('p');
    p.innerHTML = data.items[0].volumeInfo.title;

    const q = document.createElement('p');
    q.innerHTML = data.items[0].volumeInfo.description;
    const r = document.createElement('img');
    r.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    
    document.body.appendChild(p);
    document.body.appendChild(q);
    document.body.appendChild(r);
  };
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${document.getElementById('title').value}`); // ready state 1
  xhr.send(); // Asynchronous // ready state 2 and 3 and 4
};

document.getElementById('fetch').addEventListener('click', fetchFact);
