type Usuario = {
    nome: string;
    idade: number;
    ativo?: boolean;
}

const user1:Usuario = {
    nome: "João",
    idade: 20
}

interface Produto{
    nome: string;
    valor: number;
}

interface ProdutoPromocao extends Produto{
    valorPromocional: number;
}

const produto1:Produto = {
    nome: "Notebook",
    valor: 2500
}

export default function Home() {

    let nome:string = "João";
    let idade:number = 20;
    let ativo:boolean = true;

    saudacao(user1);

    return (
     <h1>ola</h1>
    );
}

function saudacao(usuario:Usuario) {
    console.log(`Olá ${usuario.nome}`);
}