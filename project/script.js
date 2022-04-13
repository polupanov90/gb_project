const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'Name', price = 0) => {
  return `
    <div class="goods-item" style="border: 2px solid; width: 150px; text-align: center; padding-bottom: 10px">
      <h3>${title}</h3>
      <p>${price}</p>
      <button class="add-button" type="button">Добавить</button>
    </div>
  `;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join(" ");
}

renderGoodsList(goods);