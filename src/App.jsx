import HttpClient from "./httpClient/httpClient";
import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
 
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

  return (
    <>
      <BookForm onAddBook={addBook} />
      <BookList books={books} onDeleteBook={deleteBook} />
    </>
  );
};

export default App;
