

//very slow way to do this
function removeClass(className){
	var forEach = Array.prototype.forEach;
	forEach.call(document.querySelectorAll("." + className), function(node) {
	    node.classList.remove(className);
	});
};


var maxWidth = "d2l-max-width";
removeClass(maxWidth);