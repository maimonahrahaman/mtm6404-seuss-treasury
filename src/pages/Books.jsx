import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://api.seussology.info/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Seuss Treasury</h1>
      <div className="books-container">
        {books.map(book => (
          <Link to={`/books/${book.id}`} key={book.id}>
            <img src={book.coverImageUrl} alt={book.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
