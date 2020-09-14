const Koa = require('koa');
const server = new Koa();

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
server.use((ctx)=>{
    const path = ctx.url;
    const method = ctx.method;
    if(path==='/tarefas'){
        if(method==='GET'){
        ctx.body = reornarListaDeTarefas();
        }
        else if( method ==='POST'){
            
        }
        else{
            ctx.status = 404;
            ctx.body = 'Não encontrado'
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