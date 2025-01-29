const username = document.getElementById("username");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm");
const signIn = document.getElementById("sign-in");
const login = document.getElementById("log-in");
const inp = document.getElementsByTagName("input");
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("button-close");
const dialogContent = document.getElementById("dialog-content");
var userIndex = null;

class Account {
    constructor(username, firstName, lastName, email, password, confirmPass) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPass = confirmPass;
    }
}

var arrayList = JSON.parse(localStorage.getItem("accounts"));

if (localStorage.getItem('log-mode') === 'login') {
    hideFields();
} else if (localStorage.getItem('log-mode') === 'signup') {
    showFields();
}


function signUpSwitch() {
    showFields();
}

function loginSwitch() {
    hideFields();
}

function signUp() {

    if (username.value.trim() === "" || firstName.value.trim() === "" || lastName.value.trim() == "" || email.value.trim() === "" || password.value.trim() === "" || confirmPass.value.trim() === "") {
        showDialog("Make sure to fill all fields please!");
    } else if (username.value.length < 4 || username.value.length > 10) {
        showDialog("The username must be 4 to 10 characters!");
    } else if (isUserTaken()) {
        showDialog("The username is taken! Try another one.");
    } else if(!email.value.trim().includes('@')) {
        showDialog("Wrong email! Try another one")
    } else if (password.value.trim() != confirmPass.value.trim()) {
        showDialog("The password is not confirmed successfully!");
    } else if (password.value.trim().length < 6 || password.value.trim().length > 12) {
        showDialog("The password must be 6 or 12 maximum characters!");
    } else {
        const account = new Account(username.value, firstName.value, lastName.value, email.value, password.value, confirmPass.value);
        arrayList.push(account);
        localStorage.setItem("accounts", JSON.stringify(arrayList));
        hideFields();
    }
}

function logIn() {
    if (isUserTaken()) {
        if (arrayList[userIndex].password === password.value.trim()) {
            window.open("index.html", "_self");
            localStorage.setItem("index", userIndex);
        } else {
            showDialog("Wrong password! Try again");
        }
    } else {
        showDialog("The account is not existed!");
    }
}

closeButton.addEventListener('click', function () {
    dialog.close();
});

function showDialog(text) {
    dialogContent.textContent = text;
    dialog.showModal();
}

function showFields() {
    if (firstName.style.display === "none") {
        firstName.style.display = "block";
        lastName.style.display = "block";
        email.style.display = "block";
        confirmPass.style.display = "block";
        signIn.style.display = "block";
        login.style.display = "none";

        firstName.disabled = false;
        lastName.disabled = false;
        email.disabled = false;
        confirmPass.disabled = false;

        document.getElementById("form-title-view").textContent = "Sign up";
        document.getElementById("sign-up-switch").classList.remove("switch-off");
        document.getElementById("sign-up-switch").classList.add("switch-on");
        document.getElementById("log-in-switch").classList.remove("switch-on");
        document.getElementById("log-in-switch").classList.add("switch-off");
    }
}

function hideFields() {
    if (firstName.style.display != "none") {
        firstName.style.display = "none";
        lastName.style.display = "none";
        email.style.display = "none";
        confirmPass.style.display = "none";
        signIn.style.display = "none";
        login.style.display = "block";

        firstName.disabled = true;
        lastName.disabled = true;
        email.disabled = true;
        confirmPass.disabled = true;

        document.getElementById("form-title-view").textContent = "Login";
        document.getElementById("sign-up-switch").classList.remove("switch-on");
        document.getElementById("sign-up-switch").classList.add("switch-off");
        document.getElementById("log-in-switch").classList.remove("switch-off");
        document.getElementById("log-in-switch").classList.add("switch-on");
    }
}

function isUserTaken() {
    var check = false;
    userIndex = null;

    for (position = 0; position < arrayList.length; position++) {
        if (arrayList[position].username === username.value.trim()) {
            check = true;
            userIndex = position;
            break;
        }
    }
    return check;
}