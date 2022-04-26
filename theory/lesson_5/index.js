function init() {
   app = new Vue({
      el: '#root',
      methods: {
         sayInputString: function () {
           alert(this.inputString)
        }
      },
      data: {
         flag: true,
         title: 'Lesson 5',
         textIsShow: false,
         inputString: 'input string',
         items: [
            'red',
            'green',
            'blue',
         ]
      },
      computed: {
         computedTitle: function () {
            return this.title + '!'
         }
      },
      mounted: function () {
         console.log('app is mounted')
      }
   })
}


onload = init