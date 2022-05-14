export default Vue.component('goods-item', {
  props: [
    'item'
  ],
  template: `
      <div class="goods-item">
         <h3>{{ item.product_name }}</h3>
         <p>{{ item.price }}</p>
         <custom-button @click="$emit('addgood', item.id)">добавить</custom-button>
      </div>
    `
})