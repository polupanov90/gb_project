const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor({ title, price }) {
    this.title = title;
    this.price = price;
  }
  render(){
    return `
    <div class="goods-item">
    <h3 class="goods-heading">${this.title}</h3>
    <p>${this.price}</p>
    </div>
    `;
  }
  }
class GoodsList {
  items = [];
  fetchGoods() {
    this.items = goods;
  }
  calculatePrice() {
    return this.items.reduce((prev, { price }) => {
      return prev + price;
    }, 0)
  }
  render() {
    const goods = this.items.map(item => {
      const goodItem = new GoodsItem(item);
      return goodItem.render()
    }).join('');
  
    document.querySelector('.goods-list').innerHTML = goods;
  }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
const basketSum = goodsList.calculatePrice();
debugger
