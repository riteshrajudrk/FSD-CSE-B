import './App.css'
export const Book = ({book}) =>{
    console.log(book);
    
    return (
        <div className="card">
            <img className='bookimg'  src={book.imgURL} alt="Book image" />
            <h3>{book.title}</h3>
            <h4>Price: {book.price}</h4>
            <button>Add To Cart</button>
        </div>
    )
}