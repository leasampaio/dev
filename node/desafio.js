
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const banco = (codigo) => {
    switch (codigo){
        case '001':
            console.log("Banco do Brasil ");
            break;
        case '033':
            console.log("Banco Santander ");
            break;
         case '104':
            console.log("Caixa Econômica Federal");
            break;
        case '237':
            console.log("Banco Bradesco ");
            break;
        case '341':
           console.log("Banco Itaú  ");
           break;
        case '356':
           console.log("Banco Real");
           break;
        case '389':
           console.log("Banco Mercantil do Brasil");
           break;
        case '399' :
           console.log("HSBC Bank Brasil");
           break;
        case '422':
           console.log("Banco Safra");
           break;
        case '453':
           console.log("Banco Rural");
           break;
        case '633':
           console.log("Banco Rendimento");
           break;
        case '652':
           console.log("Itaú Unibanco Holding");
           break;
        case '745':
           console.log("Banco Citibank ");
           break;
    }
}

const removerCaracteres = (numero) => {
    let numeroTranformado = numero.repleace ('.', '')
    return numeroTranformado;
    

}
removerCaracteres 
rl.question("Digite o Código do banco: ", (codigo) => {
    banco(codigo);
    rl.close();
})