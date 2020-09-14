
const fs = require("fs");

/* fs.readFile("texto.txt", (err, buffer) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(buffer.toString());
}) */
const conteudo = "Parabéns";
fs.writeFile("saida.txt",conteudo, (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(conteudo);
    }
})
