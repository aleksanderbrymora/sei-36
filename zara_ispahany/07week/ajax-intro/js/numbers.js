const fetchFact = function () {
  const xhr = new XMLHttpRequest(); // readyState 0

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Nothing to do yet so exit the function
    }

    console.log(xhr.responseText);

    const data = JSON.parse( xhr.responseText );

    const p = document.createElement('p');
    p.innerHTML = data.text

    document.body.appendChild(p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // Asynchronous
};
document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();



// AJAX
// Asynchronous Javascript And XML
