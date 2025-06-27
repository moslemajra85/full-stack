import React, { useState } from "react";
import HttpClient from "../httpClient/httpClient";

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const reset = () => {
    setTitle("");
    setAuthor("");
    setPrice(0);
  };


  const handleNameChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(+e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      price,
    };

    // update the ui
    onAddBook(book);
    reset()
    // send Post request to the server
    HttpClient.post("/books", book)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

   };
  return (
    <div className="book-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>📖 Title</label>
          <input
            value={title}
            onChange={handleNameChange}
            className="form-control"
            type="text"
            required
          />
        </div>

        <div className="form-group">
          <label>✍️ Author</label>
          <input
            value={author}
            onChange={handleAuthorChange}
            className="form-control"
            type="text"
            required
          />
        </div>

        <div className="form-group">
          <label>💵 Price</label>
          <input
            value={price}
            onChange={handlePriceChange}
            className="form-control"
            type="number"
            min="0"
            required
          />
        </div>

        <button type="submit">➕ Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
