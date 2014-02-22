chrome.storage.sync.get(null,function(obj) {
	window.location = 'https://'+obj.un+':'+obj.pw+'@portal.myfanshawe.ca/_layouts/Fanshawe/fol_pass_thru.aspx##';
});

