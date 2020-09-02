const button = document.querySelector("button");
const altura = document.querySelector(".altura");
const peso = document.querySelector(".peso");

button.addEventListener("click", ()=> {
    let imc = 0;
    imc = (peso.valueAsNumber/(altura.valueAsNumber*altura.valueAsNumber));

    alert(imc);
})
