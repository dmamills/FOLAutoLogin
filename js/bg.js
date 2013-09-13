var routes = {
	'install':'install.html',
	'options':'options.html',
	'login':'follogin.html'
};

function hasInformation(){
	return (!localStorage['username'] || !localStorage['password']);
}

function openPage(page) {
	chrome.tabs.create({'url':page});
};

function onClicked(tab) {
	if(hasInformation())
		openPage(routes['options']);
	else
		openPage(routes['login']);
};

function onInstall(details) {
	 if(hasInformation()) {
     	openPage(routes['install']);
    }
};

chrome.runtime.onInstalled.addListener(onInstall);
chrome.browserAction.onClicked.addListener(onClicked);
