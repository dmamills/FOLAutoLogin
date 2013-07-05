
$(document).ready(function(){
	//$('#login').click(function(e){

		var userName = localStorage['userName'];
		var password = localStorage['password'];

		$('#userName').val(userName);
		$('#password').val(password); 

		$('#testform').submit();
	//});
});
