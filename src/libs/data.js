// "info" - только для самой карточки в модальном окне не используется
// prefix - нужен для использования фото в режиме retina
// category - указывается в кавычках к какой категории принадлежит та или инная работа, можно через пробел указать несколько категорий, тип категорий:
// cat-a - Учебные, 
// cat-b - Проектные,
// cat-c - Адаптив,
// cat-d - Адаптив + JS
const cardsData = `[
    {
        "id": 1,
        "category": "cat-a cat-c",
        "header": "ЭпикТрэвел",
        "info": "Верстка сайта визитки. 4 страницы",
        "about": "<li>Разработка сайта по макету из Figma на курсе Webcademy</li> <li>Создание 4 страниц, связь меню между страницами</li> <li>Создание кастомных чекбоксов</li> <li>Разработка адаптива до 360px</li>",
        "skils": "<span>HTML,</span> <span>CSS</span> ",
        "gitSource": "https://github.com/gleb-erokhin/epicTravel",
        "gitDemo": "https://gleb-erokhin.github.io/epicTravel/index.html",
        "img": "./img/cards/01.jpg",
        "bigImg": "./img/cards/01@2x.jpg",
        "prefix": " 2x"
    },
    {
        "id": 2,
        "category": "cat-a cat-d",
        "header": "Сайт коворкинга",
        "info": "Верстка лендинга для сайта коворкинга",
        "about": "<li>Разработка сайта по макету из Figma на курсе Webcademy</li> <li>Создание Лендинга с якорными ссылками</li> <li>Реализация модальных окон, Создание галереи через Tiny Slaider</li> <li>Разработка адаптива до 360px</li>",
        "skils": "<span>HTML,</span> <span>SCSS,</span> <span>JS</span>",
        "gitSource": "https://github.com/gleb-erokhin/CoWorks",
        "gitDemo": "https://gleb-erokhin.github.io/CoWorks/",
        "img": "./img/cards/02.jpg",
        "bigImg": "./img/cards/02@2x.jpg",
        "prefix": " 2x"
    },
    {
        "id": 3,
        "category": "cat-b cat-d",
        "header": "100 юристов",
        "info": "Создание сайта юридической группы",
        "about": "<li>Проект выполнянся как сложное задание во время обучения</li> <li>Верстка выполнялась на сборке Gulp</li> <li>src - рабополагаются исходники проекта</li> <li>Подключен Swiper JS карусель отзывов</li> <li>Подключение WEBP графики, конвертация фото Gulp плагином webp()</li>",
        "skils": "<span>HTML,</span> <span>SCSS,</span> <span>JS,</span> <span>Gulp</span>",
        "gitSource": "https://github.com/gleb-erokhin/100lawyers",
        "gitDemo": "https://gleb-erokhin.github.io/100lawyers/",
        "img": "./img/cards/03.jpg",
        "bigImg": "./img/cards/03@2x.jpg",
        "prefix": " 2x"
    },
    {
        "id": 4,
        "category": "cat-a cat-d",
        "header": "The Brand",
        "info": "Интернет магазин одежды",
        "about": "<li>Лендинг страница, верстка по макету из Figma</li> <li>Полностью адаптивный сайт до 320px</li> <li>Карточки товаров реализованы с помощью JSON файла данных и JS кода</li> <li>Реализована псевдо-корзина, при добавлении товара появляется блок Cart в котором через JS формируется карточка товара из базы JSON. </li> <li>Любую из карточек можно удалить, если удалить все, то блок Cart пропадает</li>",
        "skils": "<span>HTML,</span> <span>SCSS,</span> <span>JS</span>",
        "gitSource": "https://github.com/gleb-erokhin/GB_introdaction_HTML",
        "gitDemo": "https://gleb-erokhin.github.io/GB_introdaction_HTML/",
        "img": "./img/cards/04.jpg",
        "bigImg": "./img/cards/04@2x.jpg",
        "prefix": " 2x"
    },
    {
        "id": 5,
        "category": "cat-a",
        "header": "The Brand of Luxerious Fashion",
        "info": "Многостраничный сайт магазина одежды",
        "about": "<li>Верстка сайта всех 5 страниц согласно макета из Marcy</li> <li>Все страницы без адаптива</li> <li>Выполнены переходы со страниц</li> <li>Добавлено самостоятельно блок Мой Аккаунт</li>",
        "skils": "<span>HTML</span>",
        "gitSource": "https://github.com/gleb-erokhin/GB_professional_HTML",
        "gitDemo": "https://gleb-erokhin.github.io/GB_professional_HTML/",
        "img": "./img/cards/05.jpg",
        "bigImg": "./img/cards/05@2x.jpg",
        "prefix": " 2x"
    },
    {
        "id": 6,
        "category": "cat-a",
        "header": "Fengo",
        "info": "Шаблон для интернет магазина одежды",
        "about": "<li>Макет верстался с помощью сервиса Marcy</li> <li>На 16.03.2024 разработан основной макет страницы.</li> <li>Для работы над макетом использован Bootstrap для добавления карусели</li> <li>Адаптивная версия не планируется 26.11.24</li>",
        "skils": "<span>HTML,</span> <span>Git,</span> <span>Bootstrap 4</span>",
        "gitSource": "https://github.com/gleb-erokhin/GB_adaptive_lending",
        "gitDemo": "https://gleb-erokhin.github.io/GB_adaptive_lending/",
        "img": "./img/cards/07.jpg",
        "bigImg": "./img/cards/07@2x.jpg",
        "prefix": " 2x"
    }
]`