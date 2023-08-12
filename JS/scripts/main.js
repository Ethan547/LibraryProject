import Person from '../modules/person.js';
import Book from '../modules/book.js';
import Library from '../modules/library.js';

// Create a new library
export let library = new Library("The Library", "123 Main St");

// Create some 10 books and add them to the library
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "123456789", 1937, 310);
const book2 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", "123456789", 1954, 423);
const book3 = new Book("The Two Towers", "J.R.R. Tolkien", "123456789", 1954, 352);
const book4 = new Book("The Return of the King", "J.R.R. Tolkien", "123456789", 1955, 416);
const book5 = new Book("The Lion, the Witch and the Wardrobe", "C.S. Lewis", "123456789", 1950, 206);
const book6 = new Book("Prince Caspian", "C.S. Lewis", "123456789", 1951, 223);
const book7 = new Book("The Voyage of the Dawn Treader", "C.S. Lewis", "123456789", 1952, 256);
const book8 = new Book("The Silver Chair", "C.S. Lewis", "123456789", 1953, 217);
const book9 = new Book("Paradise Lost", "John Milton", "123456789", 1667, 442);
const book10 = new Book("The Divine Comedy", "Dante Alighieri", "123456789", 1320, 432);

// Add all the books to the local storage as a list of books
localStorage.setItem('books', JSON.stringify([book1, book2, book3, book4, book5, book6, book7, book8, book9, book10]));

// get the books from the local storage and add them to the library
const books = JSON.parse(localStorage.getItem('books'));
books.forEach(book => library.addBook(book));

// Create some 5 people and add them to the library members list
const person1 = new Person("John Doe", 23, "john@doe.mail");
const person2 = new Person("Jane Doe", 21, "jane@doe.mail");
const person3 = new Person("John Smith", 25, "john@smith.mail");
const person4 = new Person("Jane Smith", 22, "jane@smith.mail");
const person5 = new Person("John Jones", 27, "jane@jones.mail");

library.addMember(person1);
library.addMember(person2);
library.addMember(person3);
library.addMember(person4);
library.addMember(person5);

// Have some people borrow some books
person1.borrowBook(book8.title);
person1.borrowBook(book9.title);
person1.borrowBook(book10.title);

person2.borrowBook(book1.title);
person2.borrowBook(book2.title);

person3.borrowBook(book3.title);
person3.borrowBook(book4.title);

person4.borrowBook(book5.title);
person4.borrowBook(book6.title);
person4.borrowBook(book7.title);

person5.borrowBook(book8.title);
person5.borrowBook(book9.title);

// Create the styled HTML elements that allow the user to interact with the library
// in signing up for a library card, borrowing books, returning books, and listing
// their borrowed books.
// Library Card
const libraryCard = document.createElement('div');
libraryCard.classList.add('signup-card');
// Library Card Header
const libraryCardHeaderDiv = document.createElement('div');
const libraryCardHeader = document.createElement('h2');
libraryCardHeader.innerText = "Library Card";

// Library Card Details
const libraryCardDetails = document.createElement('div');
// Library Card Details Form
const libraryCardDetailsForm = document.createElement('form');

// Library Card Name Input
const libraryCardNameInput = document.createElement('input');
libraryCardNameInput.setAttribute('type', 'text');
libraryCardNameInput.setAttribute('placeholder', 'Enter your name');
// Library Card Age Input
const libraryCardAgeInput = document.createElement('input');
libraryCardAgeInput.setAttribute('type', 'number');
libraryCardAgeInput.setAttribute('placeholder', 'Enter your age');
libraryCardAgeInput.setAttribute('min', 5);
// Library Card Email Input
const libraryCardEmailInput = document.createElement('input');
libraryCardEmailInput.setAttribute('type', 'email');
libraryCardEmailInput.setAttribute('placeholder', 'Enter your email');
// Library Card Button
const libraryCardButton = document.createElement('input');
libraryCardButton.setAttribute('type', 'submit');
libraryCardButton.setAttribute('value', 'Sign Up');

const libraryCardName = document.createElement("p");
const libraryCardAge = document.createElement("p");
const libraryCardEmail = document.createElement("p");
const signOutButton = document.createElement("input");
signOutButton.setAttribute('type', 'submit');
signOutButton.setAttribute('value', 'Sign Out');
const detailsContainer = document.createElement("div");

// Add an event listener to the library card button
libraryCardButton.addEventListener('click', () => {

    // Check if the inputs were filled out using onchange event listeners
    if (libraryCardNameInput.value === "") {
        libraryCardName.innerText = "Name: " + prompt("Enter your name: ");
    }
    else {
        libraryCardName.innerText = "Name: " + libraryCardNameInput.value;
    }
    if (libraryCardAgeInput.value === "") {
        libraryCardAge.innerText = "Age: " + prompt("Enter your age: ");
    }
    else {
        libraryCardAge.innerText = "Age: " + libraryCardAgeInput.value;
    }
    if (libraryCardEmailInput.value === "") {
        libraryCardEmail.innerText = "Email: " + prompt("Enter your email: ");
    }
    else {
        libraryCardEmail.innerText = "Email: " + libraryCardEmailInput.value;
    }
    libraryCardButton.innerText = "Sign Out";

    // clear the card details div
    libraryCardDetailsForm.innerHTML = "";
    libraryCardDetailsForm.appendChild(detailsContainer);

    detailsContainer.appendChild(libraryCardName);
    detailsContainer.appendChild(libraryCardAge);
    detailsContainer.appendChild(libraryCardEmail);
    detailsContainer.appendChild(signOutButton);

    // Add an event listener to the sign out button
    signOutButton.addEventListener('click', () => {
        libraryCardName.innerText = "Name: ";
        libraryCardAge.innerText = "Age: ";
        libraryCardEmail.innerText = "Email: ";
        libraryCardButton.innerText = "Sign Up";

        // clear the card details div
        libraryCardDetailsForm.innerHTML = "";
        libraryCardNameInput.value = "";
        libraryCardAgeInput.value = "";
        libraryCardEmailInput.value = "";


        libraryCardDetailsForm.appendChild(libraryCardNameInput);
        libraryCardDetailsForm.appendChild(libraryCardAgeInput);
        libraryCardDetailsForm.appendChild(libraryCardEmailInput);
        libraryCardDetailsForm.appendChild(libraryCardButton);
    });

});

// Add the elements to the library card
libraryCard.appendChild(libraryCardHeaderDiv);
libraryCard.appendChild(libraryCardDetails);

libraryCardDetails.appendChild(libraryCardDetailsForm);
libraryCardHeaderDiv.appendChild(libraryCardHeader);

libraryCardDetailsForm.appendChild(libraryCardNameInput);
libraryCardDetailsForm.appendChild(libraryCardAgeInput);
libraryCardDetailsForm.appendChild(libraryCardEmailInput);
libraryCardDetailsForm.appendChild(libraryCardButton);

// get the display div from the HTML document
const display_form = document.querySelector('#display_form');
const display_books = document.querySelector('#display_books');

const libraryBooks = document.createElement('div');
libraryBooks.classList.add('library-books');
const libraryBooksHeader = document.createElement('h2');
libraryBooksHeader.innerText = "Library Books";
const libraryBooksList = document.createElement('ul');
libraryBooksList.classList.add('library-books-list');
for (let i = 0; i < library.books.length; i++) {
    const book = library.books[i];
    const bookItemLi = document.createElement('li');
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');

    // Create tags with book information
    const bookTitle = document.createElement('h4');
    bookTitle.innerText = book.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = "Author: " + book.author;
    const bookISBN = document.createElement('p');
    bookISBN.innerText = "ISBN: " + book.ISBN;
    const bookYearOfPublication = document.createElement('p');
    bookYearOfPublication.innerText = "Year of Publication: " + book.yearOfPublication;
    const bookNumberOfPages = document.createElement('p');
    bookNumberOfPages.innerText = "Number of Pages: " + book.numberOfPages;

    // Add a borrow Button
    const borrowButton = document.createElement('button');
    borrowButton.classList.add('borrow-btn');
    borrowButton.innerText = "Borrow";

    // Add the tags to the book item
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookISBN);
    bookItem.appendChild(bookYearOfPublication);
    bookItem.appendChild(bookNumberOfPages);
    bookItem.appendChild(borrowButton);

    bookItemLi.appendChild(bookItem);
    libraryBooksList.appendChild(bookItemLi);

    // Create an event listener for the borrow button
    borrowButton.addEventListener('click', () => {
        if (libraryCardName.innerText === "Name: " || libraryCardName.innerText === "") {
            alert("You must sign up for a library card to borrow books");
        } else {
            const person = library.members.find(member => member.name === libraryCardName.innerText.split(": ")[1]);
            // if the person exists, borrow the book
            if (person) {
                person.borrowBook(book);
                person.borrowBook(book);
                book.startCountdown();
                bookItem.innerText = book.title + " (Borrowed)";
                alert("You have borrowed " + book.title);
            } else {
                alert("Name doesn't exist. You must sign up for a library card to borrow books");
                window.location.href = "addUser.html";
            }
        }
    });

}
libraryBooks.appendChild(libraryBooksHeader);
libraryBooks.appendChild(libraryBooksList);

// add the library card to the display
if (display_books && display_form) {
    display_form.appendChild(libraryCard);
    display_books.appendChild(libraryBooks);
}

/**
 * Add a book to the library
 */

// Get the add book form fields by the below IDs:
// bookName, bookAuthor, bookCategory, bookPublisher, bookPrice, bookQuantity
const bookName = document.querySelector('#bookName');
const bookAuthor = document.querySelector('#bookAuthor');
const bookCategory = document.querySelector('#bookCategory');
const bookPublisher = document.querySelector('#bookPublisher');
const bookPrice = document.querySelector('#bookPrice');
const bookQuantity = document.querySelector('#bookQuantity');

// Get the add book button
const addBookButton = document.querySelector('#addBookButton');
// Add an event listener to the add book button
addBookButton.addEventListener('click', () => {
    // Create a new book
    const book = new Book(bookName.value, bookAuthor.value, bookCategory.value, bookPublisher.value, bookPrice.value, bookQuantity.value);
    //Get the list of books from the local storage
    const books = JSON.parse(localStorage.getItem('books'));
    // Add the new book to the list of books
    books.push(book);
    // Add the list of books to the local storage
    localStorage.setItem('books', JSON.stringify(books));


    // Add the book to the library
    library.addBook(book);
    // Add the book to the library books list
    const bookItemLi = document.createElement('li');
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');

    // Create tags with book information
    const bookTitle = document.createElement('h4');
    bookTitle.innerText = book.title;
    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = "Author: " + book.author;
    const bookISBN = document.createElement('p');
    bookISBN.innerText = "ISBN: " + book.ISBN;
    const bookYearOfPublication = document.createElement('p');
    bookYearOfPublication.innerText = "Year of Publication: " + book.yearOfPublication;
    const bookNumberOfPages = document.createElement('p');
    bookNumberOfPages.innerText = "Number of Pages: " + book.numberOfPages;

    // Add a borrow Button
    const borrowButton = document.createElement('button');
    borrowButton.classList.add('borrow-btn');
    borrowButton.innerText = "Borrow";

    // Add the tags to the book item
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookISBN);
    bookItem.appendChild(bookYearOfPublication);
    bookItem.appendChild(bookNumberOfPages);
    bookItem.appendChild(borrowButton);

    bookItemLi.appendChild(bookItem);
    libraryBooksList.appendChild(bookItemLi);

    // Create an event listener for the borrow button
    borrowButton.addEventListener('click', () => {
        if (libraryCardName.innerText === "Name: ") {
            alert("You must sign up for a library card to borrow books");
        } else {
            const person = library.members.find(member => member.name === libraryCardName.innerText.split(": ")[1]);
            person.borrowBook(book);
            book.startCountdown();
            bookItem.innerText = book.title + " (Borrowed)";
        }
    });
});


