interface IAnimalDomestico {
    nome: string,
    animal: 'Cachorro' | 'Gato',
    idade: number, 
    parqueFavorito?: string;
}

type IAnimalDomesticoLeitura = {
    /*+ Adicionando */ +readonly [K in keyof IAnimalDomestico] -?/*-? (Remove dado como opcional anterior)*/: IAnimalDomestico[K];
}

class meuAnimal implements IAnimalDomesticoLeitura {
    nome;
    animal;
    idade;
    parqueFavorito;

    constructor(nome, idade, animal, parqueFavorito) {
        this.nome = nome;
        this.idade = idade;
        this.animal = animal;
        this.parqueFavorito = parqueFavorito;
    }
}

const cachorro = new meuAnimal('Apolo',3,'Cachorro','Parque');
