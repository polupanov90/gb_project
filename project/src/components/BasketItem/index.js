export default Vue.component('basket-item', {
  props: [
    'item'
  ],
  template: `
      <div class="basket-item">
        <div class="basket-item_field">
          <span class="basket-item__title">{{ item.data.product_name }}</span>
          <span class="basket-item__price">( {{ item.data.price }}р. )</span>
        </div>
         <div class="basket-item__count">
           <span>{{ item.count }}шт.</span>
           <button>+</button>
           <button>-</button>
         </div>
         <div class="basket-item__total">Всего: {{ item.total }}р.</div>
      </div>
    `
})