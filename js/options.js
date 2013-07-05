function saveChanges() {

	var userName = document.getElementById('userName').value;
	var password = document.getElementById('password').value;

	localStorage["userName"] = userName;
	localStorage["password"] = password;

	var display = document.getElementById('saveDisplay');
	display.innerHTML = "<h4>Changes Saved</h4>";

	$('#saveDisplay').fadeIn('slow').delay(500).fadeOut('slow');
}

function loadSettings() {

	var userName = localStorage["userName"] || '';
	var password = localStorage["password"] || '';

	var userNameEl = document.getElementById('userName');
	userNameEl.value = userName;

	var passwordEl = document.getElementById('password');
	passwordEl.value = password;
}

document.addEventListener('DOMContentLoaded',loadSettings);
document.querySelector('#saveButton').addEventListener('click',saveChanges);