import Library from "./JS/library.js";
import Person from "./JS/person.js";
import Book from "./JS/book.js";

window.onload = function(){
    // Creste a new library
    let library = new Library("The Library", "123 Main St");
    // create new book follwoing the definintion in the Boook.s file
    // > id, name, description, author, year, genre
    const book1 = new Book(1000, "The Hobbit", "J.R.R. Tolkien", "123456789", 1937, 310);
    const book2 = new Book(1001, "The Fellowship of the Ring", "J.R.R. Tolkien", "123456789", 1954, 423);
    const book3 = new Book(1002, "The Two Towers", "J.R.R. Tolkien", "123456789", 1954, 352);
    const book4 = new Book(1003, "The Return of the King", "J.R.R. Tolkien", "123456789", 1955, 416);
    const book5 = new Book(1004, "The Lion, the Witch and the Wardrobe", "C.S. Lewis", "123456789", 1950, 206);
    const book6 = new Book(1005, "Prince Caspian", "C.S. Lewis", "123456789", 1951, 223);
    const book7 = new Book(1006, "The Voyage of the Dawn Treader", "C.S. Lewis", "123456789", 1952, 256);
    const book8 = new Book(1007, "The Silver Chair", "C.S. Lewis", "123456789", 1953, 217);
    const book9 = new Book(1008, "Paradise Lost", "John Milton", "123456789", 1667, 442);
    const book10 = new Book(1009, "The Divine Comedy", "Dante Alighieri", "123456789", 1320, 432);
    
    // Add all the books to the local storage as a list of books
    localStorage.setItem('books',JSON.stringify([book1,book2,book3,book4,book5,book6,book7,book8,book9,book10]));
    // Get the books from the local storage and add them to the library
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach(book => library.addBook(book));
    // Create some 5 people and add them to the library member list
    // Follow the format from your Person.js file:
    // > name, email, city, birth_date
    const person1 = new Person("John Doe", "john@doe.mail", "Hong Kong", "23/10/2000");
    const person2 = new Person("Jane Doe", "jane@doe.mail", "Hong Kong", "1/1/1998");
    const person3 = new Person("John Smith","john@smith.mail","Tokyo","1/12/2010");
    const person4 = new Person("Jane Smith","jane@smith.mail","Tokyo","9/1/1979");
    const person5 = new Person("Tom Smith","tom@smith.mail","New York","2/10/2000")
    
    // Add the people created above to the library Member list
    library.addMember(person1);
    library.addMember(person2);
    library.addMember(person3);
    library.addMember(person4);
    library.addMember(person5);
    
    // Have some of the member borrow some books
    // e.g person1.borrowBook(book8);
    // Person 1 books (at least 3 books)
    person1.borrowBook(library, book1);
    person1.borrowBook(library, book9);
    person1.borrowBook(library, book10);
    // Person 2 books (at least 3 books)
    person2.borrowBook(library, book2);
    person2.borrowBook(library, book6);
    person2.borrowBook(library, book10);
    // Person 3 books (at least 2 books)
    person3.borrowBook(library, book1);
    person3.borrowBook(library, book7);
    person3.borrowBook(library, book4);
    // Person 4 books (at least 2 books)
    person4.borrowBook(library, book5);
    person4.borrowBook(library, book8);
    person4.borrowBook(library, book9);
    // Person 5 books (at least 3 books)
    person5.borrowBook(library, book10);
    person5.borrowBook(library, book3);
    person5.borrowBook(library, book6);

    // Dispay the books in the homepage
    const libraryBooks = document.getElementById("books");
    libraryBooks.classList.add("library-books");
    const libraryBooksHeader = document.createElement("h2");
    libraryBooksHeader.innerText = "Library Books";
    const libraryBooksList = document.createElement("ul");
    libraryBooksList.classList.add("library-books-list");

    //  Using a for loop to display our books on the homepage
    for(let i = 0; i < library.books.length; i++) {
        const book = library.books[i];
        const bookItemLi = document.createElement('li');
        const bookItem = document.createElement ('div');
        bookItem.classList.add('book-item');

        /**
         * Display the different book fields in the cards
         * name, description, author, year, genre
         */
        // Create tags with book information
        // Book Name
        const bookTitle = document.createElement('h4');
        bookTitle.innerText = book.name;
        // Book Author
        const bookAuthor = document.createElement('p');
        bookAuthor.innertext = "Author: " + book.author;
        // Book Description
        const bookDescription = document.createElement('p');
        bookDescription.innerText = "Description: " + book.description;
        // Book Year
        const bookYear = document.createElement('p');
        bookYear.innerText = "Year of Publication: " + book.year;
        // Book Genre
        const bookGenre = document.createElement('p');
        bookGenre.innerText = "Genre of book: " + book.genre;
        
        // Add a Borrow Book Button
        const borrowBookButton = document.createElement('button');
        borrowBookButton.classList.add('borrow-btn');
        borrowBookButton.innerText = "Borrow";

        // Add the tags to the book item
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookAuthor);
        bookItem.appendChild(bookDescription);
        bookItem.appendChild(bookYear);
        bookItem.appendChild(bookGenre);
        
        bookItemLi.appendChild(bookItem);
        libraryBooksList.appendChild(bookItemLi);
    }
    
    libraryBooks.appendChild(libraryBooksHeader);
    libraryBooks.appendChild(libraryBooksList);


    // Get the display div in which we'll add all the content for rendering
    const display = document.getElementById("display");

    /**
     * Create the styled HTML elements that allow the user to interact with the library 
     * in signing up for a library card, borrowing books, returning books, and listing 
     * their borrowed books.
     */ 
    // Library Card - containing the Sign up form
    const libraryCard = document.createElement('div');
    libraryCard.classList.add("library-card");

    // Library Card Header
    const libraryCardHeader = document.createElement('h2');
    libraryCardHeader.innerText = "Library Card";
    // Library Card Name Label
    const libraryCardNameLabel = document.createElement('p');
    libraryCardNameLabel.innerText = "Name: ";
    // Library Card Name Input
    const libraryCardNameInput = document.createElement('input');
    libraryCardNameInput.setAttribute('type','text');
    libraryCardNameInput.setAttribute('placeholder','Enter your name');
    // Library Card Birth Year Label
    const libraryCardBirthYear = document.createElement('p');
    libraryCardBirthYear.innerText = "Birth Year: ";
    // Library Card Birth Year Input
    const libraryCardBirthYearInput = document.createElement('input');
    libraryCardBirthYearInput.setAttribute('type','text');
    libraryCardBirthYearInput.setAttribute('placeholder','Enter your birth date');
    // Library Card Member City Label
    const libraryCardMemberCityLabel = document.createElement('p');
    libraryCardMemberCityLabel.innerText = "Member's City: ";
    // Library Card Member City Input
    const libraryCardMemberCityInput = document.createElement('input');
    libraryCardMemberCityInput.setAttribute('type','text');
    libraryCardMemberCityInput.setAttribute('placeholder','Enter your city');
    // Library Card Email
    const libraryCardEmail = document.createElement('p');  
    libraryCardEmail.innerText = "Email: ";
    // Library Card Email Input
    const libraryCardEmailInput = document.createElement('input');
    libraryCardEmailInput.setAttribute('type','email');
    libraryCardEmailInput.setAttribute('placeholder','Enter your email');
    // Library Card Button    
    const libraryCardButton = document.createElement('button');
    libraryCardButton.innerText = "Sign Up";
    // Add an event listener to th siugn up button
    libraryCardButton.addEventListener('click',() => {
        // Person felds:
        //  > name, email, city, birth_date
        libraryCardNameLabel.innerText = "Name: " + prompt("Enter your name: ");
        libraryCardEmail.innerText = "Email: " + prompt("Enter your email: ");
        libraryCardBirthYear.innerText = "Birth Year: " + prompt("Enter your birth date: ");
        libraryCardMemberCityLabel.innerText = "City: " + prompt("Enter your city: ");
        
    })

    // Add the library card elements to the Library Card using appendChild
    libraryCard.appendChild(libraryCardHeader);
    // Name (Label and Input)
    libraryCard.appendChild(libraryCardNameLabel);
    libraryCard.appendChild(libraryCardNameInput);
    // Email (Label and Input)
    libraryCard.appendChild(libraryCardEmail);
    libraryCard.appendChild(libraryCardEmailInput);
    // City (Label and Input)
    libraryCard.appendChild(libraryCardMemberCityLabel);
    libraryCard.appendChild(libraryCardMemberCityInput);
    // Birth Year (Label and Input)
    libraryCard.appendChild(libraryCardBirthYear);
    libraryCard.appendChild(libraryCardBirthYearInput);
    // Sign Up Button
    libraryCard.appendChild(libraryCardButton);
    
    // add the library card to the display
    display.appendChild(libraryCard);
}