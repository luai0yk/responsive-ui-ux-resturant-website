const foodImage = document.getElementById('foodImage');
const juiceImage = document.getElementById('juiceImage');
const sweetImage = document.getElementById('sweetImage');

var dow = 1;
function down() {
    if (dow === 1) {
        open("#drink-container", "_self");
    } else if (dow === 2) {
        open("#sweet-container", "_self");
    } else if (dow === 3) {
        open("#food-container", "_self");
        dow = 0;
    }
    dow+=1;
}

imageChanger();

function imageChanger() {

    var counter = 0;
    setInterval(() => {
        counter++;
        if(counter == 1) {
            foodImage.src = "../img/food/food-8.png";
            juiceImage.src = "../img/juice/juice-13.png";
            sweetImage.src = "../img/sweet/sweet-3.png";
        } else if(counter == 2) {
            foodImage.src = "../img/food/food-6.png";
            juiceImage.src = "../img/juice/juice-1.png";
            sweetImage.src = "../img/sweet/sweet-7.png";
        } else if(counter ==  3) {
            foodImage.src = "../img/food/food-12.png";
            juiceImage.src = "../img/juice/juice-11.png";
            sweetImage.src = "../img/sweet/sweet-2.png";
            counter = 0;
        }

    }, 3000);
}

