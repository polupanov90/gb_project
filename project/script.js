const goods = [
  { image: `img.src='Shoes.png'`, title: 'Shirt', price: 150 },
  { image: `img.src='Shoes.png'`, title: 'Socks', price: 50 },
  { image: `img.src='Shoes.png'`, title: 'Jacket', price: 350 },
  { image: `img.src='Shoes.png'`, title: 'Shoes', price: 250 },
];

const renderGoodsItem = (image, title = 'test', price) => {
  return `
    <div class="goods-item">
      <img>${image}</img>
      <h3>${title}</h3>
      <p>${price}</p>
    </div>
  `;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);