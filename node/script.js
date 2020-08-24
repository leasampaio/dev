
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cadastro = [
  {
    nome: 'Lea',
    dataDeNascimento: '**/**/**',
    cpf: '00000000000',
    profissao: 'estudante',
    deletado: false
  }
];


const listarUsuarios = () => {
  console.log(cadastro);

}
const deletarUsuario = (cpf)=>{
  let possuiDeletado = false;
  for(let i = 0; i< cadastro.length; i++){
    if (cadastro[i].cpf === cpf ){

      
      cadastro[i].deletado=true;
      console.log(`Usuário de CPF ${cpf} deletado!`);
      possuiDeletado = true;
    }
  }
  if(!possuiDeletado){
    console.log(`Usuário de CPF ${cpf} não encontrado`)

  }

}

const cadastrar = (usuario) => {
  cadastro.push(usuario);
};

cadastrar({
  nome: 'gato',
  dataDeNascimento:'09/05/16',
  cpf: '11111111111',
  profissao: 'Só dorme',
  deletado: false
})

rl.question('O que você deseja fazer? ', (resposta)=>{
  console.log(resposta);
  if(resposta==='listar'){
    console.log(cadastro);
  }
  else if(resposta==='deletar'){
    rl.question('Digite o CPF: ', (cpf)=>{
      deletarUsuario(cpf);
      rl.close();
    })
  }
  
  else if(resposta === 'cadastrar'){
    let novoUsuario = {};
    rl.question('Digite o nome: ', (nome) => {
      novoUsuario.nome = nome;
      rl.question('Digite a data de nascimento: ', (dataDeNascimento) => {
        novoUsuario.dataDeNascimento = dataDeNascimento;
        rl.question('Digite o CPF: ', (cpf) => {
          novoUsuario.cpf = cpf;
          rl.question('Digite a profissão: ', (profissao) => {
            novoUsuario.profissao = profissao;
            novoUsuario.deletado = false;
            console.log(novoUsuario);
            cadastrar(novoUsuario);
            console.log("Pronto! O usuário foi cadastrado! ")
            rl.close();
            

          })
        })
      })
    })
    
  }
  
})
