new Vue({
    el: '#desafio',
    data: {
        nome: "carlos",
        idade: "22",
        imagemUrl: "https://i.redd.it/nimtgglsgge91.jpg",
    },
    methods: {
      idadeMultiplica(){
        return this.idade*3;
      },  
      numeroRandom(){
        return Math.random();
      },
      mudaNome(){
        this.nome = event.target.value;
      }
    },
});