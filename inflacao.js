import pergunta from "readline-sync";

let opcao = "";
let salario = "";
let inflacao = ""; 
let ano = "";
let salario_minimo = "";
let crescimento_salarial = "";
let inflacao_IPCA = "";
let contador = 0;

let colecao_salarios = [
    {salario: 510, ano: 2010},
    {salario: 545, ano: 2011},
    {salario: 622, ano: 2012},
    {salario: 678, ano: 2013},
    {salario: 724, ano: 2014},
    {salario: 788, ano: 2015},
    {salario: 880, ano: 2016},
    {salario: 937, ano: 2017},
    {salario: 954, ano: 2018},
    {salario: 998, ano: 2019},
    {salario: 1045, ano: 2020}
];

let colecao_inflacao_IPCA = [
    {inflacao: 5.91, ano: 2010},
    {inflacao: 6.50, ano: 2011},
    {inflacao: 5.84, ano: 2012},
    {inflacao: 5.91, ano: 2013},
    {inflacao: 6.41, ano: 2014},
    {inflacao: 10.67, ano: 2015},
    {inflacao: 6.29, ano: 2016},
    {inflacao: 2.95, ano: 2017},
    {inflacao: 3.75, ano: 2018},
    {inflacao: 4.31, ano: 2019},
    {inflacao: 4.52, ano: 2020}
];

let crescimento = [
    {ano: 2010, salario_minimo: 510, crescimento_salarial: "-", inflacao_IPCA: 5.91},
    {ano: 2011, salario_minimo: 545, crescimento_salarial: 6.86, inflacao_IPCA: 6.50}
];

console.log("1 - Listar os salários minimos de 2010 á 2020.");
console.log("2 - Listar o índice IPCA de 2010 á 2020.");
console.log("3 - Comparação entre o porcentual de aumento salárial e o IPCA. \n");

opcao = Number(pergunta.question("Escolha uma opcao: "));
console.log("Opção escolida: " + opcao+"\n");

switch(opcao) {
    case 1:
        while(contador < colecao_salarios.length) {
            console.log("Ano: ".padEnd(25,".")+colecao_salarios[contador].ano);
            console.log("Salário minimo: ".padEnd(25,".")+"R$: "+colecao_salarios[contador].salario+"\n");
            contador++;
        }
        break;

    case 2:
        do{
            console.log("Ano: ".padEnd(25,".")+colecao_inflacao_IPCA[contador].ano);
            console.log("Inflacao IPCA: ".padEnd(25,".")+colecao_inflacao_IPCA[contador].inflacao+"%"+"\n");
            contador++;
        } while (contador < colecao_inflacao_IPCA.length);
        break;

        case 3:
             while(contador < crescimento.length) {
                console.log("Ano: ".padEnd(25,".")+crescimento[contador].ano);
                console.log("Salario minimo: ".padEnd(25,".")+"R$: "+crescimento[contador].salario_minimo);
                console.log("Crescimento salarial: ".padEnd(25,".")+crescimento[contador].crescimento_salarial+"%");
                console.log("Inflacao IPCA: ".padEnd(25,".")+crescimento[contador].inflacao_IPCA.toFixed(2)+"%"+"\n");
                contador++
             }
        break;
}