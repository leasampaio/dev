const lista = ["cubos", "academy", "dev"];

const questao1 = (vetor) =>{
    console.log(vetor.includes("academy"));
}
const questao2 = (vetor) =>{
    console.log(vetor.indexOf("academy"));
}
/* Questão 3. Utilizando o método splice(), faça uma função que filtra uma lista, removendo todos elementos que tem mais de 5 caracteres. */

let entrada = ['Brasil', 'Espanha', 'Argentina'] 	;

const questao3 =(vetor) => {
    for(let i =0; i<vetor.length; i++){
        if(vetor[i].length>5){
            vetor.splice(i)
            
        }
    }
 console.log(vetor);
}
const questao4 = (entrada) =>{
    let parte1 = entrada.join(", ");
    let index = parte1.lastIndexOf(",");
    parte1 = parte1.substring(0,index);
    parte1 += ` ou ${entrada[entrada.length-1]}`

    console.log(parte1);
}

questao4(entrada);