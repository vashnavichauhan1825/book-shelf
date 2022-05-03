import './App.css';
import { useState } from 'react';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';


function App() {

 
  const BookArray=[
    {
      id:1,
      title:'think like a monk',
      author:'jay shetty',
      status:'📖'

    },
    {
      id:2,
      title:'Deep work',
      author:'cal Newport',
      status:'⛳'
    },
    {
      id:3,
      title:'the subtle art of not giving a f*ck',
      author:'Mark Manson',
      status:'📚'
    }
  ]

  const [newBookArray , setNewBookArray]= useState(BookArray);

  const newTitleHandler=(newBookList)=>{
    setNewBookArray((prevArray)=>{ return [newBookList,...prevArray]})
  }
 console.log(newBookArray)
  return (
    <div className="App">
    <BookForm newTitle={newTitleHandler}/>
    <BookList BookArray={newBookArray} />
    </div>
  );
}

export default App;
