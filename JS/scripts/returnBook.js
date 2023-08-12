window.onload = function() {
    document.addEventListener("DOMContentLoaded",function () {
        const form = document.querySelector("#returnBook form");
        // Add Event Listener
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const BookName = form["bookName"].value.trim();
            const bookAuthor = form["bookAuthor"].value.trim();
            const bookDescription = form["bookDescription"].value.trim();
            const bookYear = form["bookYear"].value.trim();
            const bookGenre = form["bookYear"].value.trim();
            const errors = [];
            // Errors
            if (!BookName) {
                errors.push("Book Name is required.");
            }
            if (!bookAuthor) {
                errors.push("Book Author is required.");
            }
            if (!bookDescription) {
                errors.push("Book Description is required");
            }
        })
    });    
}
