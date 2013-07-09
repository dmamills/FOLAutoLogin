
function removeClass(className) {

	var forEach = Array.prototype.forEach;
	var nodes = document.getElementsByClassName(className);
	forEach.call(nodes,function(node){
		node.classList.remove(className);
	})
};

var maxWidth = "d2l-max-width";
removeClass(maxWidth);