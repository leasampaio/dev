const button = document.querySelector("button");
const input = document.querySelector("input");

const questao2 = (entrada) =>{
    if(entrada.includes("desenvolvimento")){
        alert(
            "SIM"
        );
    }
    else{
        alert(
            "Não"
        )
    }
}

const questao3= (entrada)=>{
    const formatado = entrada.trim().toLowerCase();
    alert(formatado)
}
const questao4 = (entrada) => {
    
    alert(entrada
        .replace(".", "")
        .replace(".", "")
        .replace("-", ""));

}
button.addEventListener("click",() =>{
    //const entrada = input.value;
    //alert(entrada);
    // questao2(input.value);
    // questao3(input.value);
    questao4(input.value);
} )




/* const button = document.querySelector("button");
const altura = document.querySelector(".altura");
const peso = document.querySelector(".peso");

button.addEventListener("click", ()=> {
    let imc = 0;
    imc = (peso.valueAsNumber/(altura.valueAsNumber*altura.valueAsNumber));

    alert(imc);
}) */