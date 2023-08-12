// import Person from '../modules/person.js';
// import { library } from './main.js';
window.onload = () => {
    // Get the users from localStorage if it exists, otherwise create an empty array
    // let users = JSON.parse(localStorage.getItem("users")) || [];
    const storedUsers = localStorage.getItem("users") || "[]";
    let users = storedUsers ? JSON.parse(storedUsers) : [];

    document.querySelector('form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const name = event.target.name.value.trim();
        const age = event.target.age.value;
        const email = event.target.email.value.trim();

        let errors = [];

        if (!name) {
            errors.push("Name is required.");
        }

        if (!age || isNaN(age) || age <= 0) {
            errors.push("Valid age is required.");
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            errors.push("Valid email is required.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        // Add the new user
        users.push({
            name: name,
            age: age,
            email: email
        });

        // Update the localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("User added successfully!");

        // If not successful, clear the form and show an error message
        event.target.reset();
    });

}