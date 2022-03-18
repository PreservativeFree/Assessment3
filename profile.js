const myColorButton = document.querySelector("#color");
const myFavPlaceButton = document.querySelector("#place");
const myFavRitualButton = document.querySelector("#ritual");

const showColor = function(e) {
    alert("My favorite color is Green");
}

const showFavPlace = function(e) {
    alert("My favorite Place is Italy");
}

const showFavRitual = function(e) {
    alert("My favorite ritual is playing the podcast Grumpy Old Geeks in the morning");
}

myColorButton.addEventListener("click", showColor);
myFavPlaceButton.addEventListener("click", showFavPlace);
myFavRitualButton.addEventListener("click", showFavRitual);

myColorButton.classList.add('buttonList');
myFavPlaceButton.classList.add('buttonList');
myFavRitualButton.classList.add('buttonList');