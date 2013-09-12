
NodeList.prototype.forEach = Array.prototype.forEach;

function removeClass(className) {

	var nodes = document.getElementsByClassName(className);
	
	nodes.forEach(function(node) {
		node.classList.remove(className);
	});
};

var maxWidth = "d2l-max-width";
removeClass(maxWidth);