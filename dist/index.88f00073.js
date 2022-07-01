console.log("Interfaces");
const elefante = {
    nome: "Elefante",
    tipo: "terrestre",
    tipoSonoro () {
        console.log("nao sabemos");
    },
    altura: "grande",
    domestico: false
};
const leao = {
    nome: "Le\xe3o",
    tipo: "terrestre",
    domestico: false,
    tipoSonoro () {
        console.log("rugido");
    },
    visaoNoturna: true,
    altura: "m\xe9dio"
};
const cachorro = {
    nome: "Cachorro",
    tipo: "terrestre",
    tipoSonoro: ()=>console.log("Latido"),
    altura: "pequeno",
    domestico: true,
    visaoNoturna: false
};

//# sourceMappingURL=index.88f00073.js.map
