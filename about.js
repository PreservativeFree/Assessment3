console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function handleAlert(evt) {
	evt.preventDefault();

	alert('You are awesome!');
}
let myPicture = document.querySelector("img");

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
myPicture.addEventListener('mouseover', handleAlert);