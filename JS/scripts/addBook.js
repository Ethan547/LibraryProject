import Book from "./JS/book";

import { library } from "./main.js";
window.onload = function() {
    /**
     * CHALLENGE 1: Create a form that will be used to add a book
     * > Use the signup form as reference on how to create teh form fields
     * 
     * Book Fields:
     * > id, name, description, author, year, genre
     * 
     * - Make the ID an automatically incrementing value and get the other 
     * values from the form
     * 
     */
    // Your Code Starts Here
    const bookId = document.querySelector('#bookId');
    const bookName = document.querySelector('#bookName');
    const bookDescription = document.querySelector('#bookDescription');
    const bookAuthor = document.querySelector('#bookAuthor');
    const bookYear = document.querySelector('#bookYear');
    const bookGenre = document.querySelector("#bookGenre");
    // Get the addBook button
    const addBookButton = document.querySelector('#addBookButton');
    // Add an event listener to the add book button
    addBookButton.addEventListener('click',() => {
        // Create a new book
        const book = new Book(bookId.value, bookName.value, bookDescription.value, bookAuthor.value, bookYear.value, bookGenre.value);
        // Get the list of books from the local storage
        const books = JSON.parse(localStorage.getItem('books'));
        // Add the list of books to the local storage
        localStorage.setItem('books',JSON.stringify(books));
        // Add the book to the library
        library.addBook(book);
    })
}