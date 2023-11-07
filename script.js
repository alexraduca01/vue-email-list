const { createApp } = Vue;

createApp({
    data() {
      return {
        emailList: [],
      }
    },
    methods: {
        
    },
    mounted() {
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((emails) => {
                this.emailList.push(emails.data.response);
            });
        };
    },
}).mount('#app')