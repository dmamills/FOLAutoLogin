function injectScript(scriptName) {
	
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(scriptName);
	(document.head||document.documentElement).appendChild(s);
	
	s.onload = function() {
	    s.parentNode.removeChild(s);
	};
};

var jq = 'js/jquery-1.9.1.min.js';
var reset = 'js/reset.js';
injectScript(jq);
injectScript(reset);