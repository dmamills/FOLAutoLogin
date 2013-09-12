$(document).ready(function(){
		var userName = localStorage['username'];
		var password = localStorage['password'];

		$('#userName').val(userName);
		$('#password').val(password); 

		$('#testform').submit();
});
