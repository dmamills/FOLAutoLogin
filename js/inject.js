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
}

function injectJS(js){
    var s = document.createElement('script');
    s.appendChild(document.createTextNode(js));
    (document.head||document.documentElement).appendChild(s);
    s.onload = function() { s.parentNode.removeChild(s);};
}

function injectCSS(css) {
    var s = document.createElement('style');
    s.type = 'text/css';
    s.appendChild(document.createTextNode(css));
    (document.head||document.documentElement).appendChild(s);
}

var scripts = ['js/jquery-1.9.1.min.js'];
scripts.forEach(function(s){
    injectScript(s);
});

//insert custom css and javascript

chrome.storage.sync.get(null,function(obj) {
    console.log(obj);
    injectCSS(obj.custom_css);
    injectJS(obj.custom_js);

});


    

