console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Form submitted!')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



function giveCompliment(evt){
	 evt.preventDefault();
	 alert("You're fantastic!")
 }

let image = document.querySelector('#ducky')

 image.addEventListener('mouseover', giveCompliment);