/*
	Used to inject a script into FOL, 
	invoke with the name of the js file you wish to inject.
	Note: The javascript file must be in the manifest.json in the 
	"web_accessible_resources" array.
*/
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
var css = 'js/css_changes.js';
injectScript(jq);
injectScript(reset);
injectScript(css);