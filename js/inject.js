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

var scripts = ['js/jquery-1.9.1.min.js','js/js_changes.js','js/css_changes.js'];

scripts.forEach(function(s){
	injectScript(s);
});