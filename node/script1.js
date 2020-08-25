const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let produtos = [
    {
        nome: 'cerveja',
        preco_unitario: 250,
        quantidade: 100
    },
    {
        nome: 'vodca',
        preco_unitario:1000,
        quantidade: 50
    }];
    let indexProdutoAtual;
      
      const buscarProduto = (nome, isFirstQuestion) => {
        let produtoAchado = false;
        for (let i = 0; i < produtos.length; i++) {
          if (produtos[i].nome === nome) {
            indexProdutoAtual = i;
            produtoAchado = true;
            console.log(`Yay! Temos seu produto ${chalk.red(nome)}`);
            questionarQuantidade();
          }
        }
      
        if (produtoAchado === false) {
          console.log(`Não temos o produto ${chalk.blue(nome)}`);
          questionarProduto(false);
        }
      };
      
      const questionarProduto = (isFirstQuestion) => {
        let pergunta = "Qual produto você está procurando? ";
      
        if (isFirstQuestion === false) {
          pergunta =
            'Deseja procurar outro produto? Digite o nome do produto ou resposta "não" para encerrar o atendimento';
        }
      
        rl.question(pergunta, (resposta) => {
          if (resposta === "não" || resposta === "Não") {
            console.log(
              `Tudo bem, estaremos sempre aqui para te melhor atender. Ate logo! ${chalk.red(
                "<3"
              )}`
            );
            rl.close();
          }
          buscarProduto(resposta);
        });
      };
      
      const questionarPagamento = (quantidade) => {
        rl.question(`Você gostaria de continuar para o pagamento? `, (resposta) => {
          if (resposta === "Sim" || resposta === "sim") {
            console.log(
              `Ótimo, sua conta deu R$ ${chalk.green(
                (produtos[indexProdutoAtual].preco_unitario * quantidade) / 100
              )}. Volte sempre!`
            );
            rl.close();
          } else {
            console.log("Foi ótimo atendê-la(o), volte sempre!");
            rl.close();
          }
        });
      };
      
      const questionarQuantidade = () => {
        const produtoAtual = produtos[indexProdutoAtual];
        rl.question(
          `Quantas unidades do produto ${produtoAtual.nome}? `,
          (resposta) => {
            const quantidadeDisponivel = produtoAtual.quantidade;
            if (resposta <= produtoAtual.quantidade) {
              questionarPagamento(resposta);
            } else {
              rl.question(
                `Oopsy! Não temos essa quantidade. Nossa maior quantidade é ${quantidadeDisponivel}.\n Deseja comprar a maior quantidade disponível?`,
                (resposta) => {
                  if (resposta === "Sim" || resposta === "sim") {
                    questionarPagamento(quantidadeDisponivel);
                  } else {
                    console.log(`Tudo bem! Volte sempre! ${red.yellow(":)")}`);
                  }
                }
              );
            }
          }
        );
      };
      
      questionarProduto(true);

