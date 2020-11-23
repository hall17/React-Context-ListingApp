import React,{useContext,useState} from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [newBook, setNewBook] = useState({
        title:'',
        author:''
    })
    const handleChange = (e) => {
        console.log(e.target.id)
        console.log(e.target.value)
        setNewBook({
            ...newBook,
            [e.target.id] : e.target.value,
        })       
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(newBook)
        dispatch({type:'ADD_BOOK',book:newBook})
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="title" placeholder="Book Title" value={newBook.title}
            onChange={handleChange} required />
            <input type="text" id="author" placeholder="Author" value={newBook.author}
            onChange={handleChange} required />
            <input type="submit" value="add book" />
        </form>
    )
}
export default BookForm