var cssEditor,
    jsEditor;

function saveChanges() {

    var un = document.getElementById('username').value,
        pw = document.getElementById('password').value;

    if(cssEditor && jsEditor) {
        var custom_css = cssEditor.getValue(),
            custom_js = jsEditor.getValue();
    }

    var data = { 
                 'custom_css':custom_css || '',
                 'custom_js':custom_js || '',
                 'un':un,
                 'pw':pw 
                };

    chrome.storage.sync.set(data,function() {
           displaySave();
    });
}

function displaySave() {
    var display = document.getElementById('saveDisplay');
        display.innerHTML = "<h4>Changes Saved.</h4>";
        $('#saveDisplay').fadeIn('slow').delay(1000).fadeOut('slow');
}

function loadSettings() {

    chrome.storage.sync.get(null,function(obj) {
        
        var cssEl = document.getElementById('custom_css'),
            jsEl = document.getElementById('custom_js'),
            userNameEl = document.getElementById('username'),
            passwordEl = document.getElementById('password');
        
        //create CodeMirrors
        jsEditor = CodeMirror.fromTextArea(jsEl,{ mode: "javascript", lineNumbers:true});
        cssEditor = CodeMirror.fromTextArea(cssEl,{ mode: "css", lineNumbers:true});

        //set value to saved values
        jsEditor.getDoc().setValue(obj.custom_js);
        cssEditor.getDoc().setValue(obj.custom_css);

        userNameEl.value = obj.un;
        passwordEl.value = obj.pw;

    });
}

if(window.location.pathname !== '/install.html') document.addEventListener('DOMContentLoaded',loadSettings);
document.querySelector('#saveButton').addEventListener('click',saveChanges);