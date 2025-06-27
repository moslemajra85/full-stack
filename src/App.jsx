import HttpClient from "./httpClient/httpClient";
import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const getBooks = () => {
    HttpClient.get("/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(getBooks, []);

  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  const deleteBook = (id) => {
    // update ui
    setBooks(books.filter((book) => book.id !== id));

    // update server
    HttpClient.delete(`/books/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

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
      <BookForm onAddBook={addBook} />
      <BookList
        onUpdateBook={updateBook}
        books={books}
        onDeleteBook={deleteBook}
      />
    </div>
  );
};

export default App;
