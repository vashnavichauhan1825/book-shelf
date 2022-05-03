import React from "react";
import './Shelf.css'
const BookShelfOne = (props) => {
  return (
    <div className="book__shelf want_to_read">
       <h1>📚</h1>
      {props.bookListOne.map((item) => (
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

export default BookShelfOne;
