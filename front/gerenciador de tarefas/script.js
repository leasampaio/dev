const form = document.querySelector("form");
const input = form.querySelector(" input");
const aFazer = document.querySelector(".toDo");
const feitas = document.querySelector(".done");

function deletarTarefa(){
    const botaoDeDeletar = event.target;
    const tarefa = botaoDeDeletar.closest ("li");

    tarefa.remove();
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute ("type", "checkbox")
 
    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";
    botaoDeDeletar.addEventListener("click", deletarTarefa );

    tarefa.append(checkbox);
    tarefa.append(input.value);
    tarefa.append(botaoDeDeletar);

    aFazer.append(tarefa);

    input.value = "";




})