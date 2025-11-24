import React from 'react'
import Book from '../component/Book';
const bookData = [
  {
    id: 1,
    title: "The Silent Observer",
    price: "₹499",
    imgURL: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 2,
    title: "Whispers of the Wind",
    price: "₹399",
    imgURL: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
  },
 
  {
    id: 3,
    title: "The Mind’s Eye",
    price: "₹529",
    imgURL: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },

  {
    id: 4,
    title: "Code Breaker",
    price: "₹429",
    imgURL: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 5,
    title: "Tales of the Forgotten",
    price: "₹569",
    imgURL: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 6,
    title: "The Last Algorithm",
    price: "₹499",
    imgURL: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
  },
  {
    id: 7,
    title: "Parallel Realities",
    price: "₹389",
    imgURL: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 8,
    title: "Fragments of Light",
    price: "₹469",
    imgURL: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 9,
    title: "Secrets Beneath the Sea",
    price: "₹559",
    imgURL: "https://images.unsplash.com/photo-1473187983305-f615310e7daa",
  },
  {
    id: 10,
    title: "The Lost Civilization",
    price: "₹489",
    imgURL: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
  },
  {
    id: 11,
    title: "Infinite Horizons",
    price: "₹629",
    imgURL: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
];
const Home = () => {
  return (
    <div className='booklist'>
      {bookData.map((b,i) => <Book key={i} book={b}/>)}
    </div>
  )
}

export default Home
