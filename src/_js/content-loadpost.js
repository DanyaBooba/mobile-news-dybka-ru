var content = document.getElementById("content");
var children = document.getElementById("content").children;
var count = 1;
var max = 5;

function MorePosts() {
	if (count < max) {
		var block = document.createElement("div");
		block.classList.add("post--after");
		var str = "";
		for (i = 0; i < children.length; i++) {
			str += children[i].outerHTML;
		}

		block.innerHTML = str;
		content.after(block);

		count += 1;
	}
}

window.onscroll = function () {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;

	if (scrolled > 70) {
		MorePosts();
	}
};
