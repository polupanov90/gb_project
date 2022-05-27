const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

function renderGoodsItem(title = "Default title", price = "Default price") {
  return `
    <div class="goods-item">      
      <h3>${title}</h3>
      <p>${price}</p>
      <button class="add-Price" type="button">Добавить</button>
    </div>
  `;
}


/* Поскольку при присваиваеваем возвращенный массив свойству.
Установка innerHTML переводит массив в строку через запятую; разделитель запятых используется по умолчанию.
Для того что бы кубрать запятую надо добавить .join('') */

function renderGoodsList(list = {}) {
  document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('');
}

renderGoodsList(goods);