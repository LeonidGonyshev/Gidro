new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});
//Бэкграунд для активной вкладки таба
const tab = document.querySelectorAll('.tabs-item');
const tabCl = (item) => {
  item.addEventListener('click', () => {
    tab.forEach((item) => {
      item.classList.remove('tab-active')
    })
    item.classList.add('tab-active')
   })
 }
tab.forEach(tabCl)



// анимация карточек
const item = document.querySelectorAll('.goods-item')
const itemHov = (item) => {
  const title = item.querySelector('.item-title')
  item.addEventListener('mouseover', () => {
    item.style.boxShadow = '3px 3px 20px rgba(50, 50, 50, 0.25)';
    item.style.border = 'none';
    title.style.color = '#1C62CD'
  })
}
item.forEach(itemHov)

const itemOut = (item) => {
  const title = item.querySelector('.item-title')
  item.addEventListener('mouseout', () => {
    item.style.boxShadow = 'none';
    item.style.border = '1px solid #CDCDCD';
    title.style.color = '#2F3035'
  })
}
item.forEach(itemOut)
//добавление товара к счётчику корзины
const basket = document.querySelector('.goods')
const goods = document.querySelectorAll('.popular-item-busket')
basketTotal = 0
const addGoods = (item) => {
  item.addEventListener('click', (e) => {
    basketTotal += +e.currentTarget.dataset.goods
    basket.textContent = basketTotal
  })
}
goods.forEach(addGoods)

//Ссылка при наведении на карточку товара
const itemsPopular = document.querySelectorAll('.popular-item');
const itemsPopularHov = (item) => {
  let hiddenLink = item.querySelector('.popular-hidden-link');
  item.addEventListener('mouseover', () => {
    hiddenLink.style.display = 'block';
  })
}
itemsPopular.forEach(itemsPopularHov)

const itemsPopularOut = (item) => {
  let hiddenLink = item.querySelector('.popular-hidden-link');
  item.addEventListener('mouseout', () => {
    hiddenLink.style.display = 'none';
  })
}
itemsPopular.forEach(itemsPopularOut)

//Бэкграунд для лайка
const like = document.querySelectorAll('.popular-like');
const likeClick = (item) => {
    item.addEventListener('click', () => {
    item.style.stroke = '#1C62CD';
  })
}
like.forEach(likeClick)

//Подчёркивание выбранного таба
const popTab = document.querySelectorAll('.popular-tabs_item');
const addBotBor = (item) => {
  item.addEventListener('click', () => {
    popTab.forEach((item) => {
      item.classList.remove('popular-active')
    })
    item.classList.add('popular-active')
  })
}
popTab.forEach(addBotBor)

//Бургер
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.burger-menu');
burger.addEventListener('click', () => {
  menu.classList.toggle('active-burger')
})

const footIn = document.querySelector('.footer-info');
const footMar = document.querySelector('.footer-market');
const info = document.querySelector('.footer-nav');
const market = document.querySelector('.footer-nav-market');

footIn.addEventListener('click', () => {
  info.classList.toggle('footer-nav-active')
})
footMar.addEventListener('click', () => {
  market.classList.toggle('footer-nav-active')
})