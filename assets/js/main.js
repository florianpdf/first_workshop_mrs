let button = document.getElementById('actionButton');
let body = document.querySelector('body');
let elementToDeleteOne = document.querySelector('#elementToDeleteOne');
let elementToDeleteTwo = document.querySelector('#elementToDeleteTwo');

button.addEventListener('click', function(){
	body.style.backgroundColor = 'green';
	elementToDeleteOne.style.display = 'block';
	elementToDeleteTwo.innerHTML = '';
})