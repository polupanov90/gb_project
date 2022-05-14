export default Vue.component('custom-button', {
  template: `
      <button class="search-button custom-button" type="button" v-on:click="$emit('click')">
         <slot></slot>
      </button>
    `
})