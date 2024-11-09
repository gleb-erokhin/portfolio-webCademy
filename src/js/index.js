// получаем данные из файла JSON
const cards = JSON.parse(cardsData);

// создаем переменную с поиском класса в который будем добавлять карточки
const productsItems = document.querySelector('.portfolio__cards');
console.log(productsItems);

// вставляем карточки с данными из JSON
cards.forEach(element => {
    productsItems.insertAdjacentHTML('beforeend',
        `
            <div class="card" data-id=${element.id}>
                <a href="#!" data-fancybox data-src="#modalWindow">
                    <div class="card__img-wrapper">
                        <div class=" card__img">
                            <img src="${element.img}" width="216" alt="">
                        </div>
                    </div>
                    <div class="card__decs">
                        <div class="card__header" >
                            <h3 class="title-3" data-header="header">${element.title}</h3>
                        </div>
                        <div class="card__text">
                            <p class="text">${element.info}
                            </p>
                        </div>
                        <div class="card__skils">
                            ${element.skils}
                        </div>
                    </div>
                </a>
            </div> 
        `
    )
});

// FancyBox
Fancybox.bind('[data-fancybox]', {

});