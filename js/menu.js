const children = document.querySelectorAll('.card');
const myDialog = document.getElementById('myDialog');
const closeButton = document.getElementById('closeButton');

const itemImage = document.getElementById('itemImage');
const itemTitle = document.getElementById('itemTitle');
const itemDescription = document.getElementById('itemDescription');
const itemPrice = document.getElementById('itemPrice');

closeButton.addEventListener('click', () => {
    myDialog.close();
});

children.forEach(function (child) {

    var bookedItemCount = 0;
    var bookedItemElement = document.createElement('h6');
    var bookButton = child.querySelector('.card button');
    var itemPrice = child.querySelector('.price');

    bookedItemElement.classList.add('booked-item-count');
    var price = Number(itemPrice.textContent.replace("$", "")).toFixed(2);
    itemPrice.textContent = Number(itemPrice.textContent.replace('$', '')).toFixed(2) + '$';
    bookButton.textContent = "Add";


    child.addEventListener('click', function () {
        itemImage.src = child.querySelector('img').getAttribute('src');
        itemTitle.textContent = child.querySelector('h3').textContent;
        itemDescription.textContent = child.querySelector('h5').textContent;
        itemPrice.textContent = child.querySelector('h2').textContent;
        myDialog.showModal();
    });

    bookButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (bookedItemCount === 0) {
            bookButton.appendChild(bookedItemElement);
        }
        bookedItemElement.textContent = ++bookedItemCount;
        itemPrice.textContent = (price * bookedItemCount).toFixed(2) + '$';
    });

    bookedItemElement.addEventListener('click', (event) => {
        event.stopPropagation();

        bookedItemCount--
        bookedItemElement.textContent = bookedItemCount;
        itemPrice.textContent = (price * bookedItemCount).toFixed(2) + '$';
        if (bookedItemCount === 0) {
            bookedItemCount = 0;
            bookButton.removeChild(bookedItemElement);
            itemPrice.textContent = price + '$';
        }
    });



});