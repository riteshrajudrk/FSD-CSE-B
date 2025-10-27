import ReactDOM from "react-dom/client";
import { Book } from "./Book";
import './App.css'

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
    title: "Journey to the Unknown",
    price: "₹599",
    imgURL: "https://images.unsplash.com/photo-1529651737248-dad5e2899f9a",
  },
  {
    id: 4,
    title: "Digital Fortress",
    price: "₹459",
    imgURL: "https://images.unsplash.com/photo-1544937950-fa07a98d237f",
  },
  {
    id: 5,
    title: "The Mind’s Eye",
    price: "₹529",
    imgURL: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 6,
    title: "Echoes of Eternity",
    price: "₹379",
    imgURL: "https://images.unsplash.com/photo-1473862170182-8823a26f984a",
  },
  {
    id: 7,
    title: "Shadows of Time",
    price: "₹489",
    imgURL: "https://images.unsplash.com/photo-1526318472351-bc6fce89ab74",
  },
  {
    id: 8,
    title: "Code Breaker",
    price: "₹429",
    imgURL: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 9,
    title: "Tales of the Forgotten",
    price: "₹569",
    imgURL: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 10,
    title: "The Last Algorithm",
    price: "₹499",
    imgURL: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
  },
  {
    id: 11,
    title: "Parallel Realities",
    price: "₹389",
    imgURL: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 12,
    title: "Fragments of Light",
    price: "₹469",
    imgURL: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 13,
    title: "Secrets Beneath the Sea",
    price: "₹559",
    imgURL: "https://images.unsplash.com/photo-1473187983305-f615310e7daa",
  },
  {
    id: 14,
    title: "The Lost Civilization",
    price: "₹489",
    imgURL: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
  },
  {
    id: 15,
    title: "Infinite Horizons",
    price: "₹629",
    imgURL: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
];

const App = () => {
  return (
    <div className="booklist">
      {bookData.map((book) =>  (
        <Book key={book.id} book = {book} />
      ))}
    </div>
  );
};

export default App;
