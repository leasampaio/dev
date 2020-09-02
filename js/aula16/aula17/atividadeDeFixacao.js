const vetor = [ 1, 2, 3, 4];
const vetorTransformado = vetor.map(x => x*4);
 console.log(vetorTransformado);

 const pessoas =[ 
     {nome: 'José',
    idade: 29},
    {
        nome: 'Nicolas',
        idade: 28
    },
    {
        nome: 'Mini nick',
        idade:1
    }
 ];
 const ehMaior = pessoas.filter(x => x.idade > 18) ;
console.log(ehMaior);
