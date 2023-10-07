// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the login and signup buttons
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");

    // Add event listeners to the login and signup buttons
    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            // Redirect to the login page
            window.location.href = "login.html";
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener("click", function() {
            // Redirect to the signup page
            window.location.href = "signup.html";
        });
    }
});
