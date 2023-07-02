var mainobject = [
	{
		name: "AirPods Pro — стоит потратиться?",
		link: "airpods-pro-is-it-worth-the-money",
	},
	{
		name: "Babka On The Hunt: 2D Классика",
		link: "babkaonthehuntclassic",
	},
	{
		name: "Изменение creagoo.ru — Упрощение, улучшение и «Поделиться»",
		link: "change-creagoo-ru-simplify-improve-and-share",
	},
	{
		name: "Общение с клиентами в интернете",
		link: "communication-with-clients-on-the-internet",
	},
	{
		name: "Разница в макбуках за 3 года",
		link: "difference-in-macbooks-for-3-years",
	},
	{
		name: "Опыт использования iPhone 6s в течение полугода",
		link: "experience-using-iphone-6s-for-six-months",
	},
	{
		name: "Обновление медиа канала Special",
		link: "great-news-channel-special",
	},
	{
		name: "С чего я начал изучать программирование",
		link: "how-did-i-start-learning-programming",
	},
	{
		name: "Как я разрабатываю сайты на PHP",
		link: "how-i-develop-websites-in-php",
	},
	{
		name: "Как я борюсь против выгорания",
		link: "how-i-fight-against-burnout",
	},
	{
		name: "Как успешно продавать на Б/У рынках",
		link: "how-to-sell-on-buy-markets",
	},
	{
		name: "iPad mini 4 — неоднозначный девайс",
		link: "ipad-mini-4-is-an-ambiguous-device",
	},
	{
		name: "Обзор на макбук 2017 года",
		link: "macbook-2017-review",
	},
	{
		name: "Macbook Pro 2014 13' — обзор",
		link: "macbook-pro-2014-13-review",
	},
	{
		name: "Архив новостей. «Поделиться». Обновление дизайна",
		link: "news-archive-share-design-update",
	},
	{
		name: "Новый сайт creagoo.ru",
		link: "novyy-sayt-creagoo-ru",
	},
	{
		name: "Разработка pet-проектов — что это и для чего?",
		link: "pet-project-development-what-is-it-and-for-what",
	},
	{
		name: "PHP ЖИВ?",
		link: "php-is-alive",
	},
	{
		name: "История разработки проекта live.creagoo.ru — его вынужденное закрытие",
		link: "project-development-history-live-creagoo-ru-its-forced-closure",
	},
];

function LoadPosts() {
	var main = document.getElementById("postsload_mainpage");

	if (main !== null) {
		for (i = 0; i < Length(mainobject.length); i++) {
			var obj = mainobject[i];

			var block = document.createElement("div");
			block.classList.add("col");
			block.classList.add("px-0");
			block.innerHTML = GetBlock(obj.link, obj.name);
			main.append(block);
		}
	}

	if (mainobject.length >= 3) {
		mainobject.shift();
		mainobject.shift();
		mainobject.shift();
	}

	console.log(mainobject.length);
}

function GetBlock(link, name) {
	return (
		'<a href="/articles/' +
		link +
		'/" class="card"><img src="/articles/' +
		link +
		'/cap@min.jpg" class="card-img" alt="{{ post.alt }}"><div class="card-img-overlay title"><span>' +
		name +
		"</span></div></a>"
	);
}

function Length(len) {
	if (len > 3) return 3;
	return len;
}

LoadPosts();

// name: "Запомни эти карты";
// link: "rememberthesecards";

// name: "Камень ножницы бумага";
// link: "rockpaperscissors";

// name: "Sweetness";
// link: "sweetness";

// name: "Путь программиста — это трудный путь?";
// link: "the-path-of-a-programmer-is-a-difficult-path";

// name: "Б/У рынок: что это, с чем его едят?";
// link: "used-market-what-is-it-with-what-it-is-eaten";

// name: "Какие макбуки действительно стоит брать?";
// link: "which-macbooks-are-really-worth-getting";
