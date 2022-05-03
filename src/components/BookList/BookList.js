import React from 'react'
import BookShelf from './Bookshelf/BookShelf'

const BookList = (props) => {
  return (
    // <div>
    // {props.BookArray.map((book)=> 
    //     <div key={book.id}>
    //     <h3>{book.status}</h3>
    //     <h4>{book.title}</h4>
    //     <p>{book.author}</p>
    //     </div>
    // )}
       
    // </div>
    <BookShelf bookList={props.BookArray}/>
  )
}

export default BookList