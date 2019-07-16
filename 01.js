const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue ! ! !',
        frutas: [
            {nombre: 'Pera', cantidad:5},
            {nombre: 'Manzana', cantidad:11},
            {nombre: 'Platano', cantidad:0},
        ], 
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:0
            });
            this.nuevaFruta='';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})