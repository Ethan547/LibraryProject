// import { library } from './main.js';
window.onload = function () {
    // Adding an event listener to the form
    document.querySelector('#borrowBook form').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get input values
        let bookName = document.getElementById('bookName').value.trim();
        let bookId = document.getElementById('bookId').value.trim();
        let memberName = document.getElementById('memberName').value.trim();
        let memberId = document.getElementById('memberId').value.trim();

        // Validate input values
        if (bookName === '') {
            alert('Please enter a valid book name.');
            return;
        }

        if (bookId === '' || !bookId.match(/^\d+$/)) {
            alert('Please enter a valid book ID (should be a number).');
            return;
        }

        if (memberName === '') {
            alert('Please enter a valid member name.');
            return;
        }

        if (memberId === '' || !memberId.match(/^\d+$/)) {
            alert('Please enter a valid member ID (should be a number).');
            return;
        }

        // If all validations pass
        alert('Successfully borrowed the book!');
    });


};