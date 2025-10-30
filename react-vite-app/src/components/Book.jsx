import React from 'react'
import './Book.css'
const Book = ({book}) => {
  return (
    <div className='card'>
      <img src={book.image} width="200" height="200" alt="book image" />
      <h3>Book Title : {book.title}</h3>
      <h4>Book Price : ₹{book.price}</h4>
      <button>Add to cart</button>
    </div>
  )
}

export default Book
