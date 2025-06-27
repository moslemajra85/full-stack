import Book from "./Book";


const BookList = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        padding: "2rem",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        minHeight: "100vh",
      }}
    >
      {props.books.map((book, idx) => (
        <Book
          onUpdateBook={props.onUpdateBook}
          key={idx}
          book={book}
          onDeleteBook={props.onDeleteBook}
        />
      ))}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          div[style*="box-shadow"] {
            cursor: pointer;
          }
          div[style*="box-shadow"]:hover {
            transform: translateY(-8px) scale(1.03) rotate(-1deg);
            box-shadow: 0 16px 32px rgba(80, 80, 180, 0.18);
          }
        `}
      </style>
    </div>
  );
};

export default BookList;
