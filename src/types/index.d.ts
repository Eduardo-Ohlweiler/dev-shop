export interface Product{
    nome: string;
    valor: number;
    estoque: number;
    enderecoEstoque:{
        prateleira:number;
        corredor:number;
    };
    onClick: (event) => void;
}

type Status = "ativo" | "inativo";

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nomes:Array<string> = ["João", "Maria", "Pedro", "Ana"];