const readline =require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout,
});

rl.question("Qual curso você está fazendo?", function qualCurso(resposta){
    console.log(resposta);
    rl.close();
})