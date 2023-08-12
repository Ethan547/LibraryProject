// Book's class
class Book {
    // Required Inputs & Optional Inputs
    constructor(id, name, description, author, year, genre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.year = year;
        this.return_date = "";
        this.genre = genre;
        this.status = "CheckIn";
        this.borrower = "";
        this.library = "";
    }
    // trackBorrowPeriod
    trackBorrowPeriod(borrower){
        // Create the date then start the countdown using a forloop
        // Reference (Date): https://www.w3schools.com/js/js_dates.asp
        // Reference (for-loop): https://www.w3schools.com/js/js_loop_for.asp
        let today = new Date();
        let days;
        for (let i = 15; i > 0; i--){
            if (i == 0){
                days = 15;
            }
        }
        today.setDate(today.getDay() + days);
    }
    // CheckIn
    checkIn(library){
        library.addBook(this);
    }
    // CheckOut
    checkOut(borrower, library){
        library.borrowABook(borrower, this);
        this.status = "CheckedOut";
        this.borrower = borrower;
        this.library = library;
    }
    // ReturnBook
    return(borrower, library){
        library.returnBook(borrower, this);
    }
}
export default Book;