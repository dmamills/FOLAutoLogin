$(document).ready(function(){
		var userName = localStorage['userName'];
		var password = localStorage['password'];

		$('#userName').val(userName);
		$('#password').val(password); 

		$('#testform').submit();
});
