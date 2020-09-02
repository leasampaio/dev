const button = document.querySelector("button");
const adulto = document.querySelector(".adultos");
const crianca = document.querySelector(".criancas");
button.addEventListener("click", () => {

    
    let carneA = 0;
    let coracaoA = 0;
    let cerveja = 0;
    let refrigeranteA = 0;

    for(let i=0; i<adulto.valueAsNumber; i++ ){
        
        carneA+= 300;
        coracaoA+=100;
        cerveja+=0.5;
        refrigeranteA+=1;
            
    }
    let carneC = 0;
    let coracaoC = 0;
    let refrigeranteC = 0;

    for(let i=0; i<crianca.valueAsNumber; i++ ){
        carneC+= 150;
        coracaoC+=50;
        refrigeranteC+=0.5;
            
    }
    alert(
        `Por adulto:

    ${carneA}g de carne
    ${coracaoA}g de coração
    ${cerveja}L de cerveja
    ${refrigeranteA}L de refrigerante

Por criança:

    ${carneC}g de carne
    ${coracaoC}g de coracao
    ${refrigeranteC}L de refrigerante`


    );


}
    

)