(function () {
    const
        a = JSON.parse(cardsData),
        d = document.querySelector(".portfolio__cards"),
        modalWindow = document.getElementById("modalWindow"),
        modalImg = modalWindow.querySelector("[data-target='img']"),
        modalHeader = modalWindow.querySelector("[data-target='header']"),
        // modalText = modalWindow.querySelector("[data-target='info']"),
        modalDesc = modalWindow.querySelector("[data-target='about']"),
        modalGitSource = modalWindow.querySelector("[data-git='gitSource']"),
        modalGitDemo = modalWindow.querySelector("[data-git='gitDemo']"),
        modalPages = modalWindow.querySelector(".modal--list"),
        modalSkils = modalWindow.querySelector("[data-target='skils']");

    // Заполнение карточек на странице
    a.forEach(item => {
        d.insertAdjacentHTML("beforeend", `
			<div class="card" data-id="${item.id}">
				<a href="#!" data-fancybox data-src="#modalWindow">
					<div class="card__img-wrapper"> 
						<div class="card__img">
							<img src="${item.img}" srcset="${item.bigImg + item.prefix}" width="216" alt="" data-img="img">
						</div>
					</div>
					<div class="card__decs">
						<div class="card__header">
							<h3 class="title-3" data-header="header">${item.header}</h3>
						</div>
						<div class="card__text">
							<p class="text" data-text="text">${item.info}</p>
						</div>
						<div class="card__skils">
							${item.skils}
						</div>
					</div>
				</a>
			</div>`);
    });

    // Обработчик клика по карточке для открытия модального окна с нужными данными
    d.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        if (card) {
            const cardId = card.getAttribute("data-id");
            const cardData = a.find(item => item.id == cardId);

            // Заполнение модального окна
            modalImg.src = cardData.img;
            modalImg.srcset = cardData.bigImg + cardData.prefix;
            modalHeader.textContent = cardData.header;
            // modalText.textContent = cardData.info;
            modalDesc.innerHTML = cardData.about;
            modalSkils.innerHTML = cardData.skils;
            modalGitSource.setAttribute('href', cardData.gitSource);
            modalGitDemo.setAttribute('href', cardData.gitDemo);
        }
    });

    // Инициализация Fancybox для открытия модального окна
    Fancybox.bind("[data-fancybox]", {});

    // инструкция для запуска видео
    // выбираем селектор - все окно, отслеживаем значение - загрузка и запускаем функцию которую надо выполнить
    $(window).on('load', function () {
        // подключаем скрипт vide.js для запуска видео фона
        // ищем нужное id, применяем метод vide из библиотеке, и передаем путь к видео без разширения 
        $('#header').vide('./files/cover')
    });

})();