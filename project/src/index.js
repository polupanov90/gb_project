import './style.css';
import Search from './components/Search';
import BasketItem from './components/BasketItem';
import CustomButton from './components/CustomButton';
import BasketGoods from './components/BasketGoods';
import GoodsItem from './components/GoodsItem';
import { service, servicePost } from './service';
import { GET_BASKET_GOODS_ITEMS, GET_GOODS_ITEMS } from "./constants";

function init() {
  const app = new Vue({
    el: '#root',
    data: {
      items: [],
      search: '',
      cardIsVision: false
    },
    methods: {
      setVisionCard() {
        this.cardIsVision = !this.cardIsVision
      },
      fetchGoods() {
        service(GET_GOODS_ITEMS).then((data) => {
          this.items = data;
          this.filteredItems = data;
        });
      },
      addGood(goodId) {
        servicePost(GET_BASKET_GOODS_ITEMS, {
          id: goodId,
        })
      }
    },
    computed: {
      calculatePrice() {
        return this.filteredItems.reduce((prev, { price }) => {
          return prev + price;
        }, 0)
      },
      filteredItems() {
        return this.items.filter(({ product_name }) => {
          return product_name.match(new RegExp(this.search, 'gui'))
        })
      },
    },
    mounted() {
      this.fetchGoods();
    }
  });
}
window.onload = init