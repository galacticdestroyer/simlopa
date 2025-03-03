function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
    } else {
        document.getElementById('message').textContent = "Invalid username or password!";
    }
}
