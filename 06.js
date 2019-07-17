const app = new Vue({

    el: '#app',
    data: {
        saludo: 'Ciclo de vida de Vue'
    },

    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('veforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },

    methods:{
        destruir(){
            this.$destroy();
        }
    }
})