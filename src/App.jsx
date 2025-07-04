import HttpClient from "./httpClient/httpClient";
import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  // fecth books
  const getBooks = () => {
    HttpClient.get("/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(getBooks, []);

  // add new Books
  const addBook = (book) => {
    setBooks([book, ...books]);
    // send Post request to the server
    HttpClient.post("/books", book)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  // delete Books
  const deleteBook = (id) => {
    // update ui
    setBooks(books.filter((book) => book.id !== id));

    // update server
    HttpClient.delete(`/books/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // update
  const updateBook = (id, update) => {
    // update UI

    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...update } : book))
    );
    // update Server
    HttpClient.put(`/books/${id}`, update)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="app">
      <BookForm action="add" onBookAction={addBook} />
      <BookList
        onUpdateBook={updateBook}
        books={books}
        onDeleteBook={deleteBook}
      />
    </div>
  );
};

export default App;
