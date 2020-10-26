const formulario = document.querySelector("form");
const checkboxGeral = document.querySelector("#checkbox-todos");
const botaoFiltroTodos = document.querySelector("#botao-todas");
const botaoDeFiltroAFazer = document.querySelector("#botao-a-fazer");
const botaoDeFiltroFeitos = document.querySelector("#botao-feitas");
const botaoLimparFeitas = document.querySelector("#botao-limpar");


const listaAFazer = document.querySelector("#a-fazer");
const listaFeitas = document.querySelector("#feitas");
const input = document.querySelector("#input-tarefa" );
const contador = document.querySelector("#contador");

function atualizarContador(){
    const contagem = listaAFazer.querySelectorAll("li").length;
    contagem === 1 ? contador.innerText = "1 tarefa a fazer" : contador.innerText= `${contagem} tarefas a fazer`;
}

function atualizarContadorGeral (){
    const contagemAFazer = listaAFazer.querySelectorAll("li").length;
    const contagemFeitas = listaFeitas.querySelectorAll("li").length;
    if(contagemAFazer === 0 && contagemFeitas > 0){
        checkboxGeral.checked= true 
    }
    else{
        checkboxGeral.checked = false;

    }

}

formulario.addEventListener("submit", event =>{
    event.preventDefault();
    //adicionando tarefa
    const elementoTarefa =  document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", ()=>{
    //precisa de um ouvinte
        checkbox.checked ? listaFeitas.append(elementoTarefa) : listaAFazer.append(elementoTarefa);
        atualizarContador();
        atualizarContadorGeral ();

    })
   
    

    const elementoTexto = document.createElement("span");
    elementoTexto.innerText = input.value;
    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";
    botaoDeDeletar.addEventListener("click",()=>{

    })

    elementoTarefa.append(checkbox);
    elementoTarefa.append(elementoTexto);
    elementoTarefa.append(botaoDeDeletar);
    elementoTarefa.append(botaoDeDeletar);

    listaAFazer.append(elementoTarefa);
    input.value = "";
    atualizarContador();
    atualizarContadorGeral ();
})

checkboxGeral.addEventListener("input", ()=>{
    //marcar ou desmarcar todas como feitas
    const tarefasAfazer = listaAFazer.querySelectorAll("li");
    for (const tarefaAfazer of tarefasAfazer){
        listaFeitas.append(tarefaAfazer);
        
        const checkbox =tarefasAfazer.querySelector("input");
        checkbox.checked = true; 
        


    }

    atualizarContadorGeral ();
})
botaoFiltroTodos.addEventListener("click", ()=>{
    //Mostra todas as tarefas feitas e a fazer
})
botaoDeFiltroAFazer.addEventListener("click", ()=>{
    //Mostr todas as tarefas a fazer
})
botaoDeFiltroFeito.addEventListener("click",()=>{
    //Mostra todas as tarefas feitas
})
botaoLimparFeitas.addEventListener("click", ()=>{
    //Apaga todas as tarefas
})

