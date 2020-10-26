var listElement = document.querySelector('#aplicaco ul')
var inputElement = document.querySelector('#aplicacao input')
var buttonElement = document.querySelector('#aplicacao button')
var todos = [
    'Estudar js',
    'Estudar inglês',
    'estudar html'
];
function renderTodos(){
    for(atividades of atividades){
     var todoElement = document.createElement('li');   
     var todoText = document.createTextNode(todos);

     todoElement.appendChild(todoText);
     listElement.appendChild(todoElement);
    }
    
}
renderTodos();
