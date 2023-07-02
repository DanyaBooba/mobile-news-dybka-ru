var content = document.getElementById("content");
var count = 1;
var max = 5;

var arrayall = [
	"airpods-pro-is-it-worth-the-money",
	"babkaonthehuntclassic",
	"change-creagoo-ru-simplify-improve-and-share",
	"communication-with-clients-on-the-internet",
	"difference-in-macbooks-for-3-years",
	"experience-using-iphone-6s-for-six-months",
	"great-news-channel-special",
	"how-did-i-start-learning-programming",
	"how-i-develop-websites-in-php",
	"how-i-fight-against-burnout",
	"how-to-sell-on-buy-markets",
	"ipad-mini-4-is-an-ambiguous-device",
	"macbook-2017-review",
	"macbook-pro-2014-13-review",
	"news-archive-share-design-update",
	"novyy-sayt-creagoo-ru",
	"pet-project-development-what-is-it-and-for-what",
	"php-is-alive",
	"project-development-history-live-creagoo-ru-its-forced-closure",
	"rememberthesecards",
	"rockpaperscissors",
	"sweetness",
	"the-path-of-a-programmer-is-a-difficult-path",
	"used-market-what-is-it-with-what-it-is-eaten",
	"which-macbooks-are-really-worth-getting",
];

var currenturl = window.location.href.split("/").at(-2);

for (i = 0; i < arrayall.length; i++) {
	if (arrayall[i] === currenturl) {
		arrayall.splice(i, 1);
	}
}

function RandomPostUrl() {
	var id = Math.floor(Math.random() * arrayall.length);
	var copy = arrayall[id];
	arrayall.splice(id, 1);

	return copy;
}

function MorePosts() {
	if (count < max) {
		(function () {
			var http = new XMLHttpRequest();
			var link = RandomPostUrl();

			http.open("GET", "/articles/" + link);
			http.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var dom = new DOMParser()
						.parseFromString(this.responseText, "text/html")
						.getElementById("content").children;

					if (dom !== null) {
						var block = document.createElement("div");
						block.classList.add("post--after");
						var str = "";
						for (i = 0; i < dom.length; i++) {
							if (dom[i].children.length > 0) {
								if (dom[i].children[0].tagName === "IMG") {
									dom[i].children[0].src = "/articles/" + link + "/cap.jpg";
								}
							}

							str += dom[i].outerHTML;
						}

						block.innerHTML = str;
						content.after(block);
					}
				}
			};
			http.send(null);
		})();

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
