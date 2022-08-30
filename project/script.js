// const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const BASE_URL = 'http://localhost:8000';
const GET_GOODS_ITEMS = `${BASE_URL}/goods.json`;
const GET_BASKET_GOODS = `${BASE_URL}/basket_goods`;

function service(url, method="GET", body) {
  return fetch(url, {
    headers: Object.assign({}, body ? {
      'Content-Type': 'application/json; charset=utf-8'
    } : {}),
    method,
    body: JSON.stringify(body)
  })
  .then((res) => res.json())
}

function init() {
  
  Vue.component('search-component', {
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: String
    },
    template: `
      <input type="text" class="goods-search" :value="value" @input="$emit('input', $event.target.value)" />
    `
  })
  
  
  const CustomButton = Vue.component('custom-button', {
    template: `
      <button class="search-button" type="button" v-on:click="$emit('click')">
         <slot></slot>
      </button>
    `
  })
  const basketGoods = Vue.component('basket-goods', {
    data() {
      return {
         basketGoodsItems: []
      }
    },
    
    template: `
      <div class="fixed-area">
         <div class="basket-card">
            <div class="basket-card__header">
               <h1 class="basket-card__header__title">basket card</h1>
               <div class="basket-card__header__delete-icon"
                  v-on:click="$emit('closeclick')"
               ></div>
            </div>
            <div class="basket-card__content">
               <basket-goods-item v-for="item in basketGoodsItems" :item="item"></basket-goods-item>
            </div>
         </div>
      </div>
    `,
    mounted() {
      service(GET_BASKET_GOODS).then((data) => {
        this.basketGoodsItems = data
      })
    }
  })
  
  Vue.component('basket-goods-item', {
    props: [
      'item'
    ],
    template: `
      <div class="basket-card__content___item">
         <h3>{{item?.data?.product_name}}</h3>
         <div>count: {{item?.count}}</div>
         <div>total: {{item?.total}}</div>
         <custom-button>добавить</custom-button>
         <custom-button>удалить</custom-button>
      </div>
    `
  })
  
  const goodsItem = Vue.component('goods-item', {
    props: [
       'item'
    ],
    template: `
      <div class="goods-item">
         <h3>{{ item.product_name }}</h3>
         <p>{{ item.price }}</p>
         <custom-button @click="addGood">добавить</custom-button>
      </div>
    `,
    methods: {
      addGood() {
        service(GET_BASKET_GOODS, 'PUT', {
          id: this.item.id
        })
      }
    }
  })
  
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
        });
      },
      onSearchComponentChange(value) {
        this.search = value
      }
      
    },
    computed: {
      filteredItems() {
        return this.items.filter(({ product_name }) => {
          return product_name.match(new RegExp(this.search, 'gui'))
        })
      },
      calculatePrice() {
        return this.items.reduce((prev, { price }) => {
          return prev + price;
        }, 0)
      }
    },
    mounted() {
      this.fetchGoods();
    }
  })
}
window.onload = init