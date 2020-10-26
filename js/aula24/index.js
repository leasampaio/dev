console.log("Atividade 1\n");
const array =["aa","aaa","aaaaa","aaaaaaaaaaaaaaaaaaaaaa"];
const encontrado = array.find(x=> x.length>10);
console.log(`O resultado encontrado é ${encontrado}.\n`); 

console.log("Atividade 2 \n");
const texto = `oi
sim
ok`;
const textoArray = texto.split("");
let contador = 0, indices = [];
while(contador<textoArray.length){
    const indexEncontrado = textoArray.findIndex(x => x === "\n");
    if(indexEncontrado!== -1){
        indices.push(indexEncontrado);
        textoArray.splice(indexEncontrado, 1);
    }
    else{
        break;
    }
    contador ++;

}
console.log(indices, "\n");

console.log("Atividade 3 \n");

const numeros = [1, 2, 3, 4, 5, 6];

const ehPar = numeros.some( x => ((x%2) === 0));
console.log(ehPar);

console.log("Atividade 4 \n");
const ehQuaPerfeito = (num)=> {
    for(let i =1; i<num; i++){
        if(num === i*i){
            return true;
        }
   }
   return false;

}


console.log(numeros.some(ehQuaPerfeito));


console.log("Atividade 5 \n");

const resultado = numeros.every(x => x > 0 && Math.floor(x) ===x);
console.log(resultado);
