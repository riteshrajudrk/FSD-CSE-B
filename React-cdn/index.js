function Book(props) {
    const image = React.createElement('img', {
        src: props.image,
        width: 150,
        height: 150,
        alt: "Book Image"
    });

    const h4 = React.createElement('h4', null, "Price: " + props.price);

    const child = React.createElement('div', { className: "card" }, image, h4);

    return child;
}

const books = [
    { image: "https://m.media-amazon.com/images/I/81x8Qt-q1ZL._UF1000,1000_QL80_.jpg", price: "123/-" },
    { image: "https://m.media-amazon.com/images/I/81x8Qt-q1ZL._UF1000,1000_QL80_.jpg", price: "223/-" },
    { image: "https://m.media-amazon.com/images/I/81x8Qt-q1ZL._UF1000,1000_QL80_.jpg", price: "182/-" }
];

const parent = document.getElementsByClassName('root')[0];
const root = ReactDOM.createRoot(parent);

const booklist = books.map((book) =>
    React.createElement(Book, { image: book.image, price: book.price })
);

const bookEle = React.createElement('div', { className: "book-list" }, booklist);

root.render(bookEle);
