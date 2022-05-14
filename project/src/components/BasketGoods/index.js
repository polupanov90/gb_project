import { service } from "../../service";
import { GET_BASKET_GOODS_ITEMS } from "../../constants";

export default Vue.component('basket-goods', {
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
               <basket-item v-for="item in basketGoodsItems" :item="item"></basket-item>
            </div>
         </div>
      </div>
    `,
  mounted() {
    service(GET_BASKET_GOODS_ITEMS).then((basketGoods) => {
      this.basketGoodsItems = basketGoods
    })
  }
})