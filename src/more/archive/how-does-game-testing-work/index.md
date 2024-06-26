# Как происходит тестирование игр

Всем привет, в этой статья я хочу поговорить о том, как я делаю сборки своих проектов, тестирую их и на каких
платформах делается это.

## Что значит «собрать проект», «билд»?

Билд (или «сборка проекта») — это формирование файла, который будет запущен на определенной версии ОС, чтобы была
возможность воспользоваться создаваемым проектом.

Разработчики работают в большом проекте, где есть разные удобства для нас. Мы можем удобно перемещаться по сценам.
Удобно получать доступ к тому, что будет видеть пользователь, чтобы для него все было красиво.

Мы не можем распространять этот проект, а то, что мы распространяем по магазинам называется сборка.

## Для чего собирать проект

Опять же, мы работаем в проектах, где может быть куда больше функционала, чем представлено в игре. Делается это для
нашего удобства и ускорения производства. Мы сами регулируем то, что будет доступно пользователю и как будет
доступно пользователю.

Чтобы у игроков был доступ к игре, которую мы настраиваем - мы делаем сборки. Эта сборка может либо публично
распространяться, либо загружаться в магазин, откуда через магазин вы будете скачивать эту игру.

## На какие платформы я делаю сборку

Сборки идут почти на все платформы, доступные для игры: Android, Windows, Linux, macOS, iOS, а также я собираю проект
в WebGL, чтобы у вас была возможность поиграть онлайн.

Такой список появился буквально недавно, с самого начала он был меньше: Android и Windows. Обновление списка
обусловлено появлением возможности тестирования проектов на этих ОС. К примеру, недавно купил себе макбук и айфон,
значит я могу делать под них сборки.

## Выход на площадки

Вот уже маркетов намного меньше, на которых мы публикуемся. Говоря грубо, это только Google Play и все, хоть и
охватываем такой большой список платформ.

На самом деле, я был бы рад выйти и на другие рынки. Встает только 1 проблема — везде нужен постоянный взнос в $100
за аккаунт разработчика и еще $100 за публикацию проекта.

Игры публикуются: в Google Play, на сайте, на itch.io.

Я все еще изучаю рынок платформ, на которые будет возможность выйти. Вполне возможен тот факт, что список маркетов,
на которые мы выходим будет сильно увеличен.

## Тестовые сборки

Основная платформа - мобилки, андроид. На андроиде куда проще проверять работу игры. У меня есть 3 варианта
взаимодействия с андроид-телефоном:

<ol>
<li>Я подключаю его по USB и не делаю сборку проекта, запуская, я сразу же играю на андроид-телефоне. Такой вариант
    используется, когда мне нужно использовать телефон для управления, а смотрю в монитор за процессом игры.</li>
<li>Я подключаю его по USB и делаю сборку проекта. Таким образом я могу смотреть за загруженностью игры и могу
    удобно смотреть в консоль.</li>
<li>Я просто делаю билд проекта и отправляю его на гугл диск. Я часто бываю занят и в любой момент могу уйти
    куда-то. Поэтому по мере разработки игры я собираю проекты и отправляю куда-то в облако, к примеру, гугл диск
    или, например, загружаю apk в телеграм. Затем, когда у меня появляется возможность, я просто скачиваю apk из
    облака и смотрю за игрой: как отображается интерфейс и не лагает ли игра.</li>
</ol>

## Тестирование на других платформах

Тут вообще все просто: когда игра правильно работает на Windows и на Android, я начинаю готовить сборку проекта для
всех остальных платформ: macOS, Linux и онлайн-сборку. Затем, я устанавливаю игру и смотрю, как она выглядит и
отрисовывается на данной платформе. На самом деле, самый главный показатель - запускается ли игра, этого вполне
достаточно, потому что остальной функционал я уже успел проверить на других платформах.

Ну и все, теперь я начинаю загружать сборки на сайт, делаю страницу для игры и весь прочий «визуал».

Примерно в таком формате игра проходит стадию тестирования и публикации на сайтах и в магазине.
