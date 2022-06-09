const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
const GET_BASKET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'

const service = new Promise(function (resolve, reject) {
  function service(url, callback) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
      callback(JSON.parse(xhr.response))
    }
  }
};



class GoodsItem {
  constructor({ product_name, price }) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
      <h3>${this.product_name}</h3>
      <p>${this.price}</p>
    </div>
  `;
  }
}



class GoodsList {
  items = [];
  filteredGoods = [];
  fetchGoods(callback) {
    service(GET_GOODS_ITEMS, (data) => {
      this.items = data;
      this.filteredGoods = JSON.parse(items);
      callback()
    });
  }
  calculatePrice() {
    return this.items.reduce((prev, { price }) => {
      return prev + price;
    }, 0)
  }
  render() {
    let listHtml = '';
    this.filteredGoods.forEach(item => {
      const goodItem = new GoodsItem(item.product_name, item.price);
      listHtml += goodItem.render();
    });
      document.querySelector('.goods-list').innerHTML = listHtml;
  }
  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.items.filter(item =>
      regexp.test(item.product_name));
      this.render();
      }
    }


class BasketGoods {
  items = [];
  fetchGoods(callback) {
    service(GET_BASKET_GOODS_ITEMS, (data) => {
      this.items = data;
      callback()
    });
  }
  render() {
    const goods = this.items.map(item => {
      const goodItem = new GoodsItem(item);
      return goodItem.render()
    }).join('');
    document.querySelector('.basketGoods-list').innerHTML = goods;
  }
}

searchButton.addEventListener('click', (e) => {
  const value = searchInput.value; list.filterGoods(value);
});

const goodsList = new GoodsList();
goodsList.fetchGoods(() => {
  goodsList.render();
});

const basketGoods =  new BasketGoods();
basketGoods.fetchGoods(() => {
  basketGoods.render();
});
