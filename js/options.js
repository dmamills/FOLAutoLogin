function saveChanges() {

	localStorage["userName"] = document.getElementById('userName').value;;
	localStorage["password"] = document.getElementById('password').value;;

	var display = document.getElementById('saveDisplay');
	display.innerHTML = "<h4>Changes Saved</h4>";

	$('#saveDisplay').fadeIn('slow').delay(500).fadeOut('slow');
}

function loadSettings() {

	var userNameEl = document.getElementById('userName');
	userNameEl.value = localStorage["userName"] || '';

	var passwordEl = document.getElementById('password');
	passwordEl.value = localStorage["password"] || '';
}

document.addEventListener('DOMContentLoaded',loadSettings);
document.querySelector('#saveButton').addEventListener('click',saveChanges);