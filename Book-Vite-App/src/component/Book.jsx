import React, { useState } from 'react'
import '../App.css'
const Book = ({book}) => {
    const [count, setCount] = useState(0);
    function handleClick(){
        alert("Book added to art successfully");
    }
    function handleDecrement(){
        let mycnt = 0;
        if(count > 0){
            mycnt = count-1;
        }
        setCount(mycnt);
    }
    function handleIncrement(){
        let mycnt = 0;
        mycnt = count+1;
        setCount(mycnt);

    }
  return (
    <div className='card'>
      <img className='book-img' src={book.imgURL} width="200" height="200" alt="image"/>
      <h3>Title:{book.title}</h3>
      <h4>Price: {book.price}</h4>
      <div>
        <button className='countbtn' onClick={() => handleDecrement()}>-</button>
      <span>{count}</span>
      <button className='countbtn' onClick={() => handleIncrement()}>+</button>
      </div>
      <button onClick={handleClick} className='btn'>Add to Cart</button>
    </div>
  )
}

export default Book
