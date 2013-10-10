$(function() {
		var username = localStorage['username'],
			password = localStorage['password'];
		window.location = 'https://'+username+':'+password+'@portal.myfanshawe.ca/_layouts/Fanshawe/fol_pass_thru.aspx##';
});
