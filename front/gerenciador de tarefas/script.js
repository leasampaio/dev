const form = document.querySelector("form");
const input = form.querySelector(" input");
const aFazer = document.querySelector(".toDo");
const feitas = document.querySelector(".done");

function deletarTarefa(){
    const botaoDeDeletar = event.target;
    const tarefa = botaoDeDeletar.closest ("li");

    tarefa.remove();
}
function marcarComoFeito (evento){
    const checkbox = evento.target;
    const tarefa = checkbox.closest("li");

    if(checkbox.checked){
        feitas.append(tarefa);
    }
    else{
        aFazer.append(tarefa);
    }
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

     checkbox.addEventListener("input", marcarComoFeito) 
 
    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";
    botaoDeDeletar.addEventListener("click", deletarTarefa );

    const texto = document.createElement("span");//Criei isso só para poder alterar meu texto

    texto.innerText = input.value;

    tarefa.append(checkbox);
    tarefa.append(texto);
    tarefa.append(botaoDeDeletar);

    aFazer.append(tarefa);

    input.value = "";




})