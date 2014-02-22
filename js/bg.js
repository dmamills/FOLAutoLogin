var routes = {
	'install':'install.html',
	'options':'options.html',
	'login':'follogin.html'
};

function openPage(page) {
	chrome.tabs.create({'url':page});
};

function onClicked(tab) {
	chrome.storage.sync.get(null,function(obj){
		if(obj.un !== '' && obj.pw !== '')
			openPage(routes['login']);	
		else
			openPage(routes['options']);
	});
};

function onInstall(details) {
	 openPage(routes['install']);
};

chrome.runtime.onInstalled.addListener(onInstall);
chrome.browserAction.onClicked.addListener(onClicked);
