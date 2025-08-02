import React from 'react';

function BookDetails() {
  const books=[
    { name: 'The Silent Patient', author: 'Alex Michaelides' },
    { name: 'The Guest List', author: 'Lucy Fokley' },
    { name: 'The Midnight Library', author: 'Matt Haig' },
    { name: 'The Vanishing Half', author: 'Brit Bennett' },
    { name: 'Anxious People', author: 'Fredrik Backman' }
]
  return (
    <div>
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <h3>Title: {book.name}</h3>
          <p>Author: {book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
