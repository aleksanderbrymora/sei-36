// console.log("Hello");

const booktitle = prompt('Which book would you like to read?')

console.log(booktitle + " is a great book")


const bookSearch = function () {

	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState !== 4) {
			return;
	  }

	  const data = JSON.parse( xhr.responseText)

		console.log(data);

	  const p = document.createElement('p');
	  p.innerHTML = data.items[0].volumeInfo.title;

		const d = document.createElement('p');
	  d.innerHTML = data.items[0].volumeInfo.authors.join(", ");

		const a = document.createElement('p');
	  a.innerHTML = data.items[0].volumeInfo.description;

		const c = document.createElement('p');
	  c.innerHTML = data.items[0].volumeInfo.subtitle;

		const i = document.createElement('img');
		i.src = data.items[0].volumeInfo.imageLinks.thumbnail;

		document.body.appendChild(p);
		document.body.appendChild(d);
		document.body.appendChild(a);
		document.body.appendChild(i);
		document.body.appendChild(c);

  };
	 xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${booktitle}&maxResults=20`)

	 xhr.send();
};
bookSearch();
