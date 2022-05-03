import React from "react";
import "./BookShelf.css";
import BookShelfOne from "./BookShelfOne/BookShelfOne";
import BookShelfTwo from "./BookShelfOne/BookShelfTwo";
import BookShelfThree from "./BookShelfOne/BookShelfThree";

const BookShelf = (props) => {
  const newBookShelf = props.bookList;
  const bookListOne = newBookShelf.filter((item) => item.status === "📚");
  const bookListTwo = newBookShelf.filter((item) => item.status === "📖");
  const bookListThree = newBookShelf.filter((item) => item.status === "⛳");
 
  return (
    <div className="shelf__cont">
      <BookShelfOne bookListOne={bookListOne} key={props.id}/>
      <BookShelfTwo bookListTwo={bookListTwo}  key={props.id}/>
      <BookShelfThree bookListThree={bookListThree}  key={props.id}/>
    </div>
  );
};

export default BookShelf;
