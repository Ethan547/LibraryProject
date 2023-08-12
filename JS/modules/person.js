
/**
 * > Create a person class that has the following properties:
 * Attributes:
 * > - name
 * > - age
 * > - email
 * > - borrowedBooks
 * > - overdueBooks
 * 
 * Methods:
 * > - borrowBook
 * > - returnBook
 * > - listBorrowedBooks
 * > - listOverdueBooks
 * > - subscribeToLibrary
 * > - unsubscribeFromLibrary
 */
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.borrowedBooks = [];
        this.overdueBooks = [];
    }

    borrowBook(book) {
        if (book.isOverdue) {
            this.overdueBooks.push(book);
        }
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
        }
        const overdueIndex = this.overdueBooks.indexOf(book);
        if (overdueIndex > -1) {
            this.overdueBooks.splice(overdueIndex, 1);
        }
    }

    listBorrowedBooks() {
        return this.borrowedBooks;
    }

    listOverdueBooks() {
        return this.overdueBooks;
    }

    subscribeToLibrary(library) {
        library.addMember(this);
    }

    unsubscribeFromLibrary(library) {
        library.removeMember(this);
    }
}

export default Person;