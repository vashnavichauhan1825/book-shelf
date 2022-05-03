import React from 'react'
import './Shelf.css'
const BookShelfThree = (props) => {
  return (
    <div className="book__shelf read">
       <h1>⛳</h1>
      {props.bookListThree.map((item) => (
          <ul  key={props.key}>
         <li>
           <h4>{item.title}</h4> 
          <small>✍{item.author}</small>
         </li>
          </ul>
       
      ))}
    </div>
  )
}

export default BookShelfThree