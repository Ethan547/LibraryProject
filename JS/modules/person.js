import Library from "./library.js";
// Person's class
class Person {
    constructor(name, email, city, birth_date) {
        // Required Inputs
        this.name = name;
        this.email = email;
        this.city = city;
        this.birth_date = birth_date;
        // Optional Inputs
        this.borrowedBooks = [];
        this.wishlist = [];
        this.overdue_books = [];
    }
    // Required input
    /**
     * @params {object} library - the library you're signing up tp
     */
    signUp(library){
        // Check if the member already exists
        if (library.members.includes(this)) {
            console.log("This member already exists")
        } else {
            library.members.push(this)
        }
    }

    borrowBook(library, book){
        // Check if the book exists in the list of library books
        if(library.books.includes(book)) {
            // Add it the the person's borrowed books
            this.borrowedBooks.push(book);
            // Add it the the library's borrowed books
            library.borrowBook.push(book);
            
        }
    }
}
export default Person;