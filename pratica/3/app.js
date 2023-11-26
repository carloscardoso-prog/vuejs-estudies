new Vue({
    el: '#desafio',
    watch: {
        valor() {
            setTimeout(()=>{
                this.valor = 0;
            }, 5000);
        }
    },
    data: {
        valor: 0
    }
});