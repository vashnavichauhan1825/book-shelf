import React,{useState} from 'react'
import './BookForm.css'
import BookStatus from '../BookStatus/BookStatus'


const BookForm = (props) => {
  const [bookTitle , setTitle]= useState('');
  const [bookAuthor, setBookAuthor]= useState('');
 

 const addNewDataHandler=(data)=>{
     props.newTitle(data)
     setTitle('');
     setBookAuthor('');
  }

    const titleChangeHandler=(event)=>{
     setTitle(event.target.value);
    }

    const authorChangeHandler=(event)=>{
        setBookAuthor(event.target.value);
    }
   
  return (
   <form className='book__form'>
   <div className='form__details'>
       <div>
           <label>Title:</label>
           <input type='text' value={bookTitle} onChange={titleChangeHandler}/>
       </div>
       <div>
           <label>Author: </label>
           <input type='text' value={bookAuthor} onChange={authorChangeHandler}/>
       </div>
    </div>
      <BookStatus title={bookTitle} author={bookAuthor}  addData={addNewDataHandler} />
   </form>
  )
}

export default BookForm