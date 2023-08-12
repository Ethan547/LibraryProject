/**
 * Create a class called Book that has the following properties:
 * Attributes:
 * - title
 * - author
 * - ISBN
 * - yearOfPublication
 * - numberOfPages
 * - borrowDuration (default: 14 days)
 * - borrowedDate (default: null)
 * 
 * Methods:
 * - isOverdue
 * - daysOverdue
 * - startCountdown
 * - resetCountdown
 */
class Book {
    constructor(title, author, ISBN, yearOfPublication, numberOfPages, borrowDuration = 14) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.yearOfPublication = yearOfPublication;
        this.numberOfPages = numberOfPages;
        this.borrowDuration = borrowDuration;
        this.borrowedDate = null;
    }

    isOverdue() {
        if (this.borrowedDate === null) {
            return false;
        }
        const currentDate = new Date();
        const dueDate = new Date(this.borrowedDate);
        dueDate.setDate(dueDate.getDate() + this.borrowDuration);
        return currentDate > dueDate;
    }

    daysOverdue() {
        if (this.borrowedDate === null) {
            return 0;
        }
        const currentDate = new Date();
        const dueDate = new Date(this.borrowedDate);
        dueDate.setDate(dueDate.getDate() + this.borrowDuration);
        const daysOverdue = Math.floor((currentDate - dueDate) / (1000 * 60 * 60 * 24));
        return daysOverdue;
    }

    startCountdown() {
        this.borrowedDate = new Date();

    }

    resetCountdown() {
        this.borrowedDate = null;
    }

}

export default Book;