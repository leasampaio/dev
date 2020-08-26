
/* Questão 01. Utilizando for...of, faça uma programa que imprima na tela todos os itens de um array */
console.log("Questão 1");

const array = [1, 2,3,4];
for(let index of array){
    console.log(`Printando ${index}`);
};

// Questão 02. Utilizando for...of, faça uma programa que, apartir de um array de inteiros, cria um novo contendo apenas os elementos maiores que 10.
console.log("Questão 2");

const vetor= [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let novoVetor=[];
for (let i of vetor){
    if(i>10){
        novoVetor.push(i);
    }
}
console.log(novoVetor);



/* Questão 03. Utilizando forEach() faça uma programa que imprima na tela todos os itens de um array.
 */
console.log("Questão 3");

const imprimir = (variavel) =>{
    console.log(variavel);
}
array.forEach(imprimir);


/* Questão 04. Utilizando forEach() faça uma programa que imprima na tela todos os itens de um array e o índice em que ele se encontra. */
console.log("Questão 4")
const imprimir4 = (variavel,index) =>{
    console.log(variavel, 'No index: ', index);
}
array.forEach(imprimir4);

/* Questão 05. Utilizando forEach() faça uma programa que dobra o valor de cada item do array. Ao final, imprima o array modificado na tela. */
console.log("Questão 5");

const imprimir5 = (variavel) => {
    variavel= variavel*2;
    console.log(variavel);

}

array.forEach(imprimir5);
