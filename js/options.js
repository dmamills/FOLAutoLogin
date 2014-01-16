var cssEditor,
    jsEditor;

function saveChanges() {

    localStorage["username"] = document.getElementById('username').value;
    localStorage["password"] = document.getElementById('password').value;

    var custom_css = cssEditor.getValue(),
        custom_js = jsEditor.getValue();

    var data = {'custom_css':custom_css,'custom_js':custom_js};

    chrome.storage.sync.set(data,function(){
            var display = document.getElementById('saveDisplay');
            display.innerHTML = "<h4>Changes Saved.</h4>";
        
            $('#saveDisplay').fadeIn('slow').delay(1000).fadeOut('slow');
    });

}

function loadSettings() {

    var userNameEl = document.getElementById('username');
    userNameEl.value = localStorage["username"] || '';

    var passwordEl = document.getElementById('password');
    passwordEl.value = localStorage["password"] || '';

    chrome.storage.sync.get(null,function(obj) {
        
        var cssEl = document.getElementById('custom_css');
        var jsEl = document.getElementById('custom_js');

        //create CodeMirrors
        jsEditor = CodeMirror.fromTextArea(jsEl,{ mode: "javascript", lineNumbers:true});
        cssEditor = CodeMirror.fromTextArea(cssEl,{ mode: "css", lineNumbers:true});

        //set value to saved values
        jsEditor.getDoc().setValue(obj.custom_js);
        cssEditor.getDoc().setValue(obj.custom_css);

    });
}

document.addEventListener('DOMContentLoaded',loadSettings);
document.querySelector('#saveButton').addEventListener('click',saveChanges);