new Vue({
    el: '#desafio',
    watch: {
        valor() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    },
    computed: {
        resultado() { 
            return this.valor != 37? "valor diferente" : "valor igual";
        }
    },
    data: {
        valor: 0
    }
});