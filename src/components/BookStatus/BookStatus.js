import React from "react";
import "./BookStatus.css";

const BookStatus = (props) => {
  const addListHandler = (event) => {
    event.preventDefault();
    const newStatus = event.target.value;

    const newBookShelf = {
      id: Math.random(),
      title: props.title,
      author: props.author,
      status: newStatus,
    };
    console.log(newBookShelf);
    props.addData(newBookShelf);
  };

  return (
    <div className="button__cont">
      <button id="to_read" type="submit" value={"📚"} onClick={addListHandler}>
        📚 Want to read
      </button>
      <button id="reading" type="submit" value={"📖"} onClick={addListHandler}>
        📖 Reading
      </button>
      <button id="read" type="submit" value={"⛳"} onClick={addListHandler}>
        ⛳ Read
      </button>
    </div>
  );
};

export default BookStatus;
