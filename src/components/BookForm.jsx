import React, { useState, useEffect } from "react";

const BookForm = ({ onBookAction, action, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [author, setAuthor] = useState(initialValues?.author || "");
  const [price, setPrice] = useState(initialValues?.price || 0);

  useEffect(() => {
    setTitle(initialValues?.title || "");
    setAuthor(initialValues?.author || "");
    setPrice(initialValues?.price || 0);
  }, [initialValues]);

  const reset = () => {
    setTitle("");
    setAuthor("");
    setPrice(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      ...initialValues, // includes id for update
      title,
      author,
      price,
    };
    onBookAction(book);
    if (action === "add") reset();
  };

  return (
    <div className="book-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>📖 Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label>✍️ Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label>💵 Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="form-control"
            type="number"
            min="0"
            required
          />
        </div>
        <button type="submit">
          {action === "add" ? "➕ Add Book" : "🔼 Update"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
