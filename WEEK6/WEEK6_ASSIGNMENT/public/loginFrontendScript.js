/*
    ######################### LOGIN SYSTEM FRONTEND SCRIPT #########################

     OVERVIEW:
    This script handles the frontend authentication logic for a fullstack login/signup system.
    It communicates with the backend to perform signup, signin, and auth validation, and
    stores the JWT token in localStorage for session management.

    ----------------------------------------------------------------------

    FEATURES IMPLEMENTED:

    1.  SIGNUP:
        - Takes username and password from input fields.
        - Checks if fields are empty and shows appropriate error.
        - Sends a POST request to `/signup` on backend with user credentials.
        - Handles different backend responses:
            • 200 → Signup successful.
            • 402 → User already exists with same credentials.
            • 403 → Username already taken.
            • Else → Unspecified error.

    2.  SIGNIN:
        - Validates that the username and password are provided.
        - Sends a POST request to `/signin` with credentials.
        - On success (200), stores JWT token in `localStorage` and proceeds to TODO page.
        - Handles:
            • 403 → Invalid credentials.
            • Else → Unspecified error.

    3.  AUTH CHECK (`getTodoPage()`):
        - Sends a GET request to `/auth` with the stored JWT token in headers.
        - If authorized (200), redirects user to TODO page.
        - Else, alerts that user is logged out.

    4.  LOGOUT:
        - Clears the JWT token from `localStorage`.
        - Alerts user about logout status.

    5.  ERROR HANDLING (UI):
        - Displays a temporary error message if inputs are missing during signin/signup.
        - Uses `setTimeout` to automatically hide error after 2 seconds.

    ----------------------------------------------------------------------

     DEPENDENCIES:
    - Axios (for sending HTTP requests)

     NOTES:
    - Backend must be running locally on port 3000.
    - JWT token is stored client-side and used for protected route access.
*/

async function signup() {
    const username = document.getElementById("signup-username").value
    const password = document.getElementById("signup-password").value
    const errorDiv = document.getElementById("error");

    if (!username || !password) {
        errorDiv.innerText = "Username or password missing!";
        errorDiv.style.display = "block";
        await setTimeout(() => {
            hideError()
        }, 2000)
        return;
    }

    errorDiv.style.display = "none"; // Hide error if inputs are valid

    const response = await axios.post("http://localhost:3000/signup", {
        username: username,
        password: password
    })
    if (response.status == 200) {
        alert("signed up successfully!")
    } else if (response.status == 402) {
        alert("error! user already exists")
    } else if (response.status == 403) {
        alert("error! username taken")
    } else {
        alert("unprecedented error occured!")
    }
}

async function signin() {
    const username = document.getElementById("signin-username").value
    const password = document.getElementById("signin-password").value
    const errorDiv = document.getElementById("error");

    if (!username || !password) {
        errorDiv.innerText = "Username or password missing!";
        errorDiv.style.display = "block";
        setTimeout(() => {
            hideError()
        }, 2000)
        return;
    }

    errorDiv.style.display = "none"; // Hide error if inputs are valid

    const response = await axios.post("http://localhost:3000/signin", {
        username: username,
        password: password
    })
    if (response.status == 200) {
        localStorage.setItem("token", response.data.token)
        alert("signin successfull")
        getTodoPage()
    } else if (response.status == 403) {
        alert("user credentials invalid!")
    } else {
        alert("unprecedented error occured!")
    }
}

async function getTodoPage() {
    const response = await axios.get("http://localhost:3000/auth", {
        headers: {
            token: localStorage.getItem("token")
        }
    })
    if (response.status == 200) {
        window.location.href = "TODO_APP.html"
    } else {
        alert("user logged out!")
    }
}

function logout() {
    localStorage.removeItem("token") // fully removes the jwt token sent by the backend.
    alert("user logged out!")
}

function hideError() {
    document.getElementById("error").style.display = "none";
}
