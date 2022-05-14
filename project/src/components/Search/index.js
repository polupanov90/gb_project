export default Vue.component('search', {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: [
    'value'
  ],
  template: `
      <div class="search">
         <input type="text" class="goods-search" :value="value" @input="$emit('input', $event.target.value)"/>
      </div>
    `
})