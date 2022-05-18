"use strict";

const goods = [
	{ title: 'Shirt', price: 150 },
	{ title: 'Socks', price: 50 },
	{ title: 'Jacket', price: 350 },
	{ title: 'Shoes', price: 250 },
	{ title: undefined, price: undefined },
];

const renderGoodsItem = (title = "Продукт не опознан", price = "Уточните цену") => {
	return `
    <div class="goods-item">
		<img class="img-tovar" src="img/tovar.jpg" alt="Товар">
		<h3>Название: ${title}</h3>
   	<p>Цена: ${price}</p>
    </div>
  `;
};

const renderGoodsList = (list = []) => {
	let goodsList = list.map(({ title, price }) => renderGoodsItem(title, price)); //деструктуризируем
	document.querySelector('.goods-list').innerHTML = goodsList.join(''); //склеиваем через пустую строку
}

renderGoodsList(goods);