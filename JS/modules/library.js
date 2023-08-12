/** 
 * > Define a class called Library that has:
 * Attributes:
 * - A name property that is a string passed in on creation
 * - A location property that is a string passed in on creation
 * - A books property that is an array of Book objects
 * - A members property that is an array of Member objects
 * - A borrowedBooks property that is an array of Book objects
 * - An overdueBooks property that is an array of Book objects
 * 
 * Methods:
 * - A method called addBook that takes a Book object and adds it to the books property
 * - A method called removeBook that takes a Book object and removes it from the books property
 * - A method called addMember that takes a Member object and adds it to the members property
 * - A method called removeMember that takes a Member object and removes it from the members property
 * - A method called checkoutBook that takes a Book object and a Member object and adds the book to the borrowedBooks property
 * - A method called returnBook that takes a Book object and a Member object and removes the book from the borrowedBooks property
 * - A method called listBorrowedBooks that takes no parameters and returns an array of Book objects that are currently borrowed
 * - A method called listOverdueBooks that takes no parameters and returns an array of Book objects that are currently overdue
 * - A method called listBooks that takes no parameters and returns an array of Book objects that are currently in the library
 * - A method called listMembers that takes no parameters and returns an array of Member objects that are currently members
 * - A method called listAvailableBooks that takes no parameters and returns an array of Book objects that are currently available
 */
class Library {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.books = [];
        this.members = [];
        this.borrowedBooks = [];
        this.overdueBooks = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        // check if book is available in the books array
        if (this.books.includes(book)) {
            // remove book from books array
            this.books.splice(this.books.indexOf(book), 1);

            // check if book is available in the borrowedBooks array
            if (this.borrowedBooks.includes(book)) {
                // remove book from borrowedBooks array
                this.borrowedBooks.splice(this.borrowedBooks.indexOf(book), 1);
                console.log("Book was also removed from the borrowed books list")
            }

            // check if book is available in the overdueBooks array
            if (this.overdueBooks.includes(book)) {
                // remove book from overdueBooks array
                this.overdueBooks.splice(this.overdueBooks.indexOf(book), 1);
                console.log("Book was also removed from the overdue list")
            }
        }
        else {
            console.log("Book not found in library")
        }
    }

    addMember(member) {
        // check if member is already a member
        if (this.members.includes(member)) {
            console.log("Member already exists")
        }
        else {
            // add member to members array
            this.members.push(member);
        }

    }

    removeMember(member) {
        // check if member is a member
        if (this.members.includes(member)) {
            
            // check if member has borrowed books
            if (member.borrowedBooks.length > 0) {
                booksBorrowed = member.borrowedBooks.length;
                // remove borrowed books from library
                booksBorrowed.forEach(book => {
                    console.log(book.title);
                });

                console.log(`Member has ${booksBorrowed} borrowed books and can't be removed until they are returned`);
            } else {
                console.log("Member has no borrowed books and can be removed");
                // remove member from members array
                this.members.splice(this.members.indexOf(member), 1);
            }
        }
        else {
            console.log("Member not found in library");
        }
    }

    checkoutBook(book, member) {
        // check if book is available in the books array
        if (this.books.includes(book)) {
            // check if member is a member
            if (this.members.includes(member)) {
            
                // Check if the member has borrowed the maximum number of books which is 3
                if (member.borrowedBooks.length >= 3) {
                    console.log("You've borrowed the maximum number of books which is 3. Please return a book to borrow another");
                } else {

                    // remove book from books array
                    this.books.splice(this.books.indexOf(book), 1);
        
                    // add book to borrowedBooks array
                    this.borrowedBooks.push(book);
        
                    // add book to member's borrowedBooks array
                    member.borrowedBooks.push(book);
                }

            } else {
                console.log("Member not found in library. You've to be a member to borrow a book");
            }

        }
        else {
            console.log("Book not found in library")
        }
    }

    returnBook(book, member) {
        // check if book is available in the borrowedBooks array
        if (this.borrowedBooks.includes(book)) {
            // check if member is a member
            if (this.members.includes(member)) {
            
                // remove book from borrowedBooks array
                this.borrowedBooks.splice(this.borrowedBooks.indexOf(book), 1);
    
                // add book to books array
                this.books.push(book);
    
                // remove book from member's borrowedBooks array
                member.borrowedBooks.splice(member.borrowedBooks.indexOf(book), 1);
            } else {
                console.log("Member not found in library. You've to be a member to return a book");
            }
        }
        else {
            console.log("Book not found in library")
        }
    }

    listBorrowedBooks() {
        console.log(`This is the list of borrowed books`);
        console.log(`----------------------------------`);

        this.borrowedBooks.forEach(book => {
            console.log(`Title: ${book.title}`);
        });
    }

    listOverdueBooks() {
        console.log(`This is the list of overdue books`);
        console.log(`----------------------------------`);

        this.overdueBooks.forEach(book => {
            console.log(`Title: ${book.title}`);
        });
    }

    listBooks() {
        console.log(`This is the list of books of our library`);
        console.log(`----------------------------------------`);

        this.books.forEach(book => {
            console.log(`Title: ${book.title}`);
        });
    }

    listMembers() {
        console.log(`This is the list of members in our library`);
        console.log(`------------------------------------------`);

        this.members.forEach(member => {
            console.log(`Name: ${member.name}`);
            console.log(`Borrowed Books: ${member.borrowedBooks.length}`);
            console.log(`------------------------------------------`);
        });
    }

    listAvailableBooks() {
        console.log(`This is the list of available books`);
        console.log(`----------------------------------`);

        this.books.forEach(book => {
            console.log(`Title: ${book.title}`);
        });
    }

}

export default Library;