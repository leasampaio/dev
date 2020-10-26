const Koa = require('koa');
const bodyparser =require('koa-bodyparser');

const server = new Koa();

server.use(bodyparser());

const tarefa = {
    titulo: 'Desafio',
    descricao: 'Fazer desafio ack-end',
    concluida: false,
    deletada: false
};
const listaDeTarefas = [ {
    titulo: 'Desafio',
    descricao: 'Fazer desafio ack-end',
    concluida: false,
    deletada: false
},];

const reornarListaDeTarefas= () =>{
    const listaSemletadas = [];
    listaDeTarefas.forEach(elemento => {
        if(elemento.deletada === false){
            listaSemletadas.push(elemento)
        }
       
        
    });
    return listaSemletadas;
   
}

const addNovaTarefa = (tarefa) => {
    const novaTarefa = {
        titulo: tarefa.titulo ? tarefa.titulo : 'Sem titulo',
        descricao: tarefa.descricao ? tarefa.descricao : 'Sem descrição',
        concluida: tarefa.concluida ? tarefa.concluida : false,
        deletada: false

    }
    listaDeTarefas.push(novaTarefa);
    return novaTarefa;
}

const obterTarefa = (indice) => {
    const tarefa = listaDeTarefas[indice];
    if(tarefa){
        return tarefa;
    }
    else{
        return null;
    }

}

const deletarUmaTarefa = (index) => {
    const tarefa = obterTarefa(index);

    if(tarefa){
        listaDeTarefas.splice(index,1);
        return true;
    }
    else{
        return false;
    }


}
const atualizarConclusao = (index, estado) =>{
    const tarefa = obterTarefa (index);
    const tarefaAtualizada = {
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        concluida: estado,
        deletada: tarefa.deletada

    }
    
    if (tarefa){
        
        listaDeTarefas.splice(index, 1, tarefaAtualizada)
        return tarefaAtualizada;
    }
    else{
        return false;
    }
     
}
server.use((ctx)=>{
    const path = ctx.url;
    const method = ctx.method;
    if(path==='/tarefas'){
        if(method==='GET'){
        ctx.body = reornarListaDeTarefas();
        }
        else if( method ==='POST'){
            
            const tarefa = addNovaTarefa (ctx.request.body);
            ctx.body = tarefa;
        }
        
        else{
            ctx.status = 404;
            ctx.body = 'Não encontrado'
        }
    }
    else if(path.includes("/tarefas/")){
        const pathQuebrado = path.split("/");
        if(pathQuebrado[1]=== "tarefas"){
            const index = pathQuebrado[2];
            if(index){
                if (method ==="GET"){                
                    ctx.body = obterTarefa(index);
                }
                else if( method ==="DELETE"){
                    const resposta = deletarUmaTarefa(index);
                    if (resposta === true){
                       
                        ctx.body = "Tarefa deletada com sucesso!"
                    }
                    else{
                        ctx.body = "Não fooi posssível deletar."
                    }
                }
                else if( method === "PUT"){                
                    const estado = ctx.request.body.estado;
        
                    if(index && estado === true && estado === false){
                        ctx.body = 400;
                        ctx.body = "Requisição mal formatada";
                    }
                    else{
                        const resposta = atualizarConclusao(index, estado);
                        if(resposta){
                            ctx.body = resposta;
                        }
                        else{
                            ctx.status = 404;
                            ctx.body = resposta;
                        }
                    }
                }                
            }
            
            else{
                ctx.status = 404;
                ctx.body = 'Não encontrado'
            }
           
        }

    }
    else{
        ctx.status = 404;
        ctx.body = 'Não encontrado'
    }

})

server.listen(8081, ()=>{
    console.log('O servidor esá rodando!')
})