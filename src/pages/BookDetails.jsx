import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://api.seussology.info/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>Seuss Treasury</h1>
      <div className="book-details">
        <img src={book.coverImageUrl} alt={book.title} />
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
