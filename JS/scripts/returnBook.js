window.onload = function () {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("#returnBook form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const bookName = form["bookName"].value.trim();
            const bookAuthor = form["bookAuthor"].value.trim();
            const bookCategory = form["bookCategory"].value.trim();
            const bookPublisher = form["bookPublisher"].value.trim();
            const bookPrice = parseFloat(form["bookPrice"].value.trim());
            const bookQuantity = parseInt(form["bookQuantity"].value.trim());

            const errors = [];

            if (!bookName) {
                errors.push("Book Name is required.");
            }

            if (!bookAuthor) {
                errors.push("Book Author is required.");
            }

            if (!bookCategory) {
                errors.push("Book Category is required.");
            }

            if (!bookPublisher) {
                errors.push("Book Publisher is required.");
            }

            if (isNaN(bookPrice) || bookPrice <= 0) {
                errors.push("Invalid Book Price. It should be a positive number.");
            }

            if (isNaN(bookQuantity) || bookQuantity <= 0) {
                errors.push("Invalid Book Quantity. It should be a positive integer.");
            }

            if (errors.length > 0) {
                alert(`Errors:\n${errors.join("\n")}`);
            } else {
                alert("Successfully returned the book.");
            }
        });
    });
}