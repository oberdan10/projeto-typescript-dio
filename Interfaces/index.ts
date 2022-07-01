console.log("Interfaces")

//Contratos
//Interfaces são Contratos
//Types - podemos substituir a interface, é mais usado para junções
/* 

type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    tipoSonoro(): void;
    altura(altura:number): void;
}
*/


//Interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
    tipoSonoro(): void;
    altura: 'pequeno' | 'médio' | 'grande';
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    domestico: true
}

type IDomestico = IFelino | ICanino;

const elefante: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    tipoSonoro(){ console.log('nao sabemos')},
    altura: 'grande',
    domestico: false
}

const leao: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    domestico: false,
    tipoSonoro(){ console.log('rugido')},
    visaoNoturna: true,
    altura: 'médio',
}

const cachorro: IDomestico = {
    nome: 'Cachorro',
    tipo: 'terrestre',
    tipoSonoro: () => (console.log('Latido')),
    altura: 'pequeno',
    domestico: true,
    visaoNoturna: false
}
