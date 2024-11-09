(function () {
    const
        a = JSON.parse(cardsData),
        d = document.querySelector(".portfolio__cards"),
        modalWindow = document.getElementById("modalWindow"),
        modalImg = modalWindow.querySelector("[data-target='img']"),
        modalHeader = modalWindow.querySelector("[data-target='header']"),
        modalText = modalWindow.querySelector("[data-target='text']"),
        modalPages = modalWindow.querySelector(".modal--list"),
        modalSkils = modalWindow.querySelector(".modal__skils");

    // Заполнение карточек на странице
    a.forEach(item => {
        d.insertAdjacentHTML("beforeend", `
			<div class="card" data-id="${item.id}">
				<a href="#!" data-fancybox data-src="#modalWindow">
					<div class="card__img-wrapper"> 
						<div class="card__img">
							<img src="${item.img}" width="216" alt="" data-img="img">
						</div>
					</div>
					<div class="card__decs">
						<div class="card__header">
							<h3 class="title-3" data-header="header">${item.title}</h3>
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
            modalImg.src = cardData.bigImg;
            modalHeader.textContent = cardData.title;
            modalText.textContent = cardData.info;
            modalSkils.innerHTML = cardData.skils;
        }
    });

    // Инициализация Fancybox для открытия модального окна
    Fancybox.bind("[data-fancybox]", {});
})();