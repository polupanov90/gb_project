function init() {
   const ComponentA = Vue.component('component-a', {
      props: [
         'content'
      ],
      data() {
         return {
            title: 'Component A'
         }
      },
      template: `
         <div>
            <h2 @click="$emit('event-a', $event)">{{ title }}</h2>
            <div>{{ content }}</div>
            <component-b>
               content in component-b
               <template v-slot:common>
                  common slot content
               </template>
            </component-b>
         </div>
      `
   });
   const ComponentB = Vue.component('component-b', {
      template: `
         <div>
            <h2>component B</h2>
            <div>
               <slot name="common"></slot>
            </div>
            <div>
               <slot>default content in component b</slot>
            </div>
         </div>
      `
   });
   
   const app  = new Vue({
      el: '#root',
      methods: {
         fu(e) {
            console.log(e.target)
            alert('in fu')
         }
      }
   })
}

window.onload = init