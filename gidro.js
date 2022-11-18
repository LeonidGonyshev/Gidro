const goods = document.querySelectorAll('.goods-click')
const goodsCli = (item) => {
    item.addEventListener('click', () => {
        const active = item.querySelector('.goods-hidden')
        active.classList.toggle('goods-active')
    })
}
goods.forEach(goodsCli)
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
// Добавление в корзину
const basket = document.querySelector('.goods');
const buyGoods = document.querySelectorAll('.popular-item-busket');
const message = document.querySelector('.itemBuy');
let goodsInBasket = 0
const addBasket = (item) => {
    item.addEventListener('click', (e) => {
        goodsInBasket += +e.currentTarget.dataset.goods
        basket.textContent = goodsInBasket
        message.style.display = 'block'
        setTimeout(function(){
            message.style.display = 'none'
        },1000)
    })
}
buyGoods.forEach(addBasket)