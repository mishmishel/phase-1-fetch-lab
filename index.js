function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") 
    .then(function(resp) {
      if(!resp.ok) {
        throw new Error('Network response was not OK');
      }
    return resp.json();
    })
    .then(function(json) {
      renderBooks(json);
    })
    .catch(function(err) {
      console.log('Error:', err);
    })
} 

fetchBooks()



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
