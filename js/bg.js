chrome.runtime.onInstalled.addListener(function(details){
    if(!localStorage['username'] || !localStorage['password']) {
     	chrome.tabs.create({'url':'install.html'});
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({'url':'follogin.html'});
});

