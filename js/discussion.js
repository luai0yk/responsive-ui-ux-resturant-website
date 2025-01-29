const postsList = document.querySelectorAll('.post');
const navigators = document.querySelectorAll('.react');
var arrayList = JSON.parse(localStorage.getItem("accounts"));
var userIndex = localStorage.getItem('index');
const dialog = document.getElementById('dialog');

navigators.forEach(nav => {
    nav.addEventListener('click', function () {
        if (nav.classList.contains('selected')) {
            nav.classList.remove('selected');
        } else {
            navigators.forEach(nav => {
                nav.classList.remove('selected');
            });
            nav.classList.add('selected');
        }
    });
});

postsList.forEach(function (post) {
    const commentsList = post.querySelector('.comments-list');
    const addBtn = post.querySelector('button');
    const commentValue = post.querySelector('input');

    addBtn.addEventListener('click', function () {
        if (!userIndex) {
            dialog.showModal();
        } else if (commentValue.value.trim() === "") {
            commentValue.placeholder = "The field cannot be empty!";
        } else {
            commentValue.placeholder = "comment..";
            addComment(commentsList, commentValue);
        }
    });
});

function addComment(commentsList, commentValue) {

    const newComment = document.createElement('li');
    newComment.classList.add('comment');
    const profile = document.createElement('div');
    profile.classList.add('profile');
    const profileLetter = document.createElement('h2');
    profileLetter.textContent = arrayList[userIndex].username.charAt(0);
    const publisherUser = document.createElement('h5');
    publisherUser.classList.add('publisher-user');
    publisherUser.textContent = arrayList[userIndex].username;
    const publishedDate = document.createElement('h6');
    publishedDate.classList.add('published-date');
    publishedDate.textContent = new Date().toDateString();
    const clean = document.createElement('div');
    clean.classList.add('clean');
    const commentText = document.createElement('h5');
    commentText.classList.add('comment-text');
    commentText.textContent = commentValue.value;

    profile.appendChild(profileLetter);
    newComment.appendChild(profile);
    newComment.appendChild(publisherUser);
    newComment.appendChild(publishedDate);
    newComment.appendChild(clean);
    newComment.appendChild(commentText);
    commentsList.appendChild(newComment);

    commentValue.value = "";
}