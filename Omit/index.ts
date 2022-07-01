interface IFuncionario {
    nome: string,
    idade: number,
    nacionalidade: string;
}

interface IBrasileiro extends Omit<IFuncionario, 'nacionalidade'> {

}

const brasileiro: IBrasileiro = {
    nome: 'Oberdan',
    idade: 26
}