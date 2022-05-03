import React from "react";
import './Shelf.css'

const BookShelfTwo = (props) => {
  return (
    <div className="book__shelf currently__read">
       <h1>📖</h1>
      {props.bookListTwo.map((item) => (
          <ul  key={props.key}>
         <li>
           <h4>{item.title}</h4> 
          <small>✍{item.author}</small>
         </li>
          </ul>
       
      ))}
    </div>
  );
};

export default BookShelfTwo;
