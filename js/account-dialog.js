const profile = document.getElementById('profile');

const firstLetterInHeader = document.getElementById('firstLetterInHeader');
const firstLetterInDialog = document.getElementById('firstLetterInDialog');

const lists = document.querySelectorAll('#dialog li');
const close = document.getElementById('close');
const log = document.getElementById('log');
const sign = document.getElementById('sign');
var arrayList = null;


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

if (localStorage.getItem("accounts")) {
    arrayList = JSON.parse(localStorage.getItem("accounts"));
} else {
    localStorage.setItem("accounts", JSON.stringify(arrayList = [new Account("CRExperts", "Cocking", "Cocking Restaurant", "Experts", "cre733", "cre733")]));
}

if (localStorage.getItem("index")) {
    var userIndex = localStorage.getItem("index");
    log.textContent = 'log out';
    sign.style.display = 'none';
} else {
    userIndex = 0;
    log.textContent = 'log in';
    sign.style.display = 'block';
}

firstLetterInHeader.textContent = arrayList[userIndex].username.charAt(0);
firstLetterInDialog.textContent = arrayList[userIndex].username.charAt(0);
lists[0].innerHTML += arrayList[userIndex].username;
lists[1].innerHTML += arrayList[userIndex].firstName + ' ' + arrayList[userIndex].lastName;
lists[2].innerHTML += arrayList[userIndex].email;



profile.addEventListener('click', () => {
    dialog.showModal();
});

log.addEventListener('click', () => {
    if (userIndex) {
        localStorage.removeItem('index');
        location.reload();
    } else {
        localStorage.setItem('log-mode', 'login');
        window.open("log-page.html", "_self");
    }
});

sign.addEventListener('click', () => {
    localStorage.setItem('log-mode', 'signup');
    window.open("log-page.html", "_self");
});

close.addEventListener('click', () => {
    dialog.close();
});