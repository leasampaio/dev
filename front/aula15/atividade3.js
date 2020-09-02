const selacao = document.querySelector("select");
const button = document.querySelector("button");
const span = document.querySelector("span");
 button.addEventListener("click",
 ()=>{
     let selecionado = selacao.value;
     if ( selecionado===Email){
        span.innerHTML = 'E-mail';
     }
     else{
        span.innerHTML = 'Telefone';
     }
 }
 )