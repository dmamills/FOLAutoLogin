$(function() {
		var username = localStorage['username'],
			password = localStorage['password'];
			
		document.getElementById('username').value = username;
		document.getElementById('password').value = password;
		document.forms[0].submit();
});
