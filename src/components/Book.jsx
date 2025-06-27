import React, { useState } from "react";
import BookForm from "./BookForm";
import { FaPencilAlt } from "react-icons/fa";

const Book = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleUpdate = (updatedBook) => {
    props.onUpdateBook(props.book.id, updatedBook);
    setIsEditing(false);
  };

  return (
    <div
      key={props.book.id}
      style={{
        background: "white",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 24px rgba(80, 80, 180, 0.15)",
        padding: "2rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s",
      }}
    >
      <span style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>📚</span>
      <FaPencilAlt onClick={handleEditToggle} style={{ cursor: "pointer" }} />
      <h2
        style={{
          fontSize: "1.3rem",
          fontWeight: 700,
          margin: "0.5rem 0",
          color: "#4338ca",
          textAlign: "center",
        }}
      >
        {props.book.title}
      </h2>
      {isEditing ? (
        <BookForm
          action="update"
          initialValues={props.book}
          onBookAction={handleUpdate}
        />
      ) : null}
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 500,
          color: "#64748b",
          margin: "0.3rem 0 1.2rem 0",
          textAlign: "center",
        }}
      >
        ✍️ {props.book.author}
      </h3>
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "#059669",
          background: "#ecfdf5",
          borderRadius: "0.7rem",
          padding: "0.4rem 1.2rem",
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        💵{" "}
        {Number(props.book.price).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
      <button
        style={{
          marginTop: "1rem",
          background: "#ef4444",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          fontWeight: 600,
        }}
        onClick={() => props.onDeleteBook(props.book.id)}
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default Book;
