
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
	event.preventDefault(); // prevent form submission

	const email = loginForm.email.value;
	const password = loginForm.password.value;

	// validate email and password
	if (!validateEmail(email)) {
		alert("Invalid email format");
		return;
	}

	if (!validatePassword(password)) {
		alert("Password must be at least 8 characters long");
		return;
	}

	// send login request to server
	// you can use AJAX to send a request to the server
	// and authenticate the user
});

function validateEmail(email) {
	// regular expression to validate email format
	const regex = /\S+@\S+\.\S+/;
	return regex.test(email);
}

function validatePassword(password) {
	return password.length >= 8;
}

