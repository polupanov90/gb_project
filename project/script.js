// "use strict";

const goods = [
	{ title: 'Shirt', price: 150 },
	{ title: 'Socks', price: 50 },
	{ title: 'Jacket', price: 350 },
	{ title: 'Shoes', price: 250 },
];

class GoodsItem {
	constructor({ title = "Продукт не опознан", price = "Уточните цену" }) {
		this.title = title;
		this.price = price;
		this.summa = summa;
	}
	render() {
		return `
		     <div class="goods-item">
		 		<img class="img-tovar" src="img/tovar.jpg" alt="Товар">
		 		<h3>Название: ${this.title}</h3>
		    	<p>Цена: ${this.price}</p>
		     </div>
		`
	}
}

class GoodsList {
	fetchData() {
		this.list = goods;
	}

	getCount() {
		return this.list.reduce((prev, { price }) => {           //Сумма Прайса
			return prev + price;

		}, 0)

	}



	render() {
		const goodsList = this.list.map(item => {
			const goodsItem = new GoodsItem(item);
			return goodsItem.render()

		}).join('');
		document.querySelector('.goods-list').innerHTML = goodsList;

	}
}

const renderGoodsItem = (summa) => {
	return `
    <div class="goods-item">
		<h3>Общая сумма заказа ${summa}</h3>
    </div>
  `;
}




const goodsList = new GoodsList(goods);
goodsList.fetchData()
const summa = goodsList.getCount()
goodsList.render()

console.log(summa);
const foot = renderGoodsItem(summa);
document.querySelector('.summa').innerHTML = foot;






//Первый урок 1

// const renderGoodsItem = (title = "Продукт не опознан", price = "Уточните цену") => {
// 	return `
//     <div class="goods-item">
// 		<img class="img-tovar" src="img/tovar.jpg" alt="Товар">
// 		<h3>Название: ${title}</h3>
//    	<p>Цена: ${price}</p>
//     </div>
//   `;
// };

// const renderGoodsList = (list = []) => {
// 	let goodsList = list.map(({ title, price }) => renderGoodsItem(title, price)); //деструктуризируем
// 	document.querySelector('.goods-list').innerHTML = goodsList.join(''); //склеиваем через пустую строку
// 	console.log(goodsList);
// }

// renderGoodsList(goods);
