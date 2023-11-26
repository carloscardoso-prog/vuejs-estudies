new Vue({
    el: '#desafio',
    data: {
        valor: 'Teste',
    },
    methods: {
        exibirAlerta() {
            alert("botao clicado");
        },
        armazenaValor() { 
            this.valor = event.target.value;
        }
    },
})