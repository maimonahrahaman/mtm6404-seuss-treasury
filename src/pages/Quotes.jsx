import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://api.seussology.info/quotes/random/10')
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, []);

  return (
    <div>
      <h1>Seuss Treasury - Quotes</h1> {/* Added title for clarity */}
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div className="quote" key={index}>
            <p>{quote.text}</p>
            <span>— Dr. Seuss in {quote.book}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
