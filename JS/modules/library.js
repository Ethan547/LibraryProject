// Library's class
class Library {
    constructor(name, email, location) {
        this.name = name;
        this.email = email;
        this.location = location;
        this.books = [];
        this.borrowedBooks = [];
        this.members = [];
    }

    // > BorrowAbook
    borrowABook(person, book){
    // Check if the members
        if (this.members.includes(person)) {
            if (this.books.includes(book)) {
                console.log(`${book.name} has been given to ${person.name}`);
            }else{
                console.log(`${book.name} is not in the library`);
            }
        }else{
            console.log(`${person.name} is not a member in the library, please check or sign up`);
        }
    }

    // ReturnBook
    returnBook(person, book){
        person.borrowedBooks.pop(book)
        this.borrowedBooks.pop(book)
        book.status = "CheckedIn";
    }

    // > RemoveMember
    removeMember(person){
        if (this.members.includes(person)){
            if (person.borrowedBooks.length > 0){
                console.log(`${person.name}'s book hasn't returned yet, please return before removing the member acount.`);
                for(let i=0; i < person.borrowedBooks.length; i++){
                    console.log(`${person.borrowedBooks[i].name}` );
                }
            }else{
                this.members.pop(person);
                console.log(`${person.name} has be removed from the library`);
            }
        }else{
            console.log(`${person.name} is not a member in the library, please check or sign up`);
        }
    }
    // > AddBook
    addBook(book){
        if (this.books.includes(book)){
            console.log(`This book is already inside the library`)
        }else{
            console.log(`${book.name} has been add to the library`)
        }
    }
    // > RemoveBook
    removeBook(book){
        if (this.books.includes(book)){
            console.log(`${book.name} has been removed from the library`)
        }else{
            console.log(`${book.name} is not in the library`)
        }
    }
    // Add member
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
}
export default Library;