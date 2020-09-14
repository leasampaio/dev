const Koa = require("koa");
const server = new Koa();



server.use((ctx) => {
	ctx.status = 201;
	const nome =ctx.query.nome;
	const redirect = ctx.query.redirect;

	if (!nome){
	ctx.status = 400;
	ctx.body = 'Você precisa passar um nome!';
	return;
	}

	if(redirect){

	ctx.redirect('https://www.google.com/');
	return;
	}

	 ctx.body = `Olá, ${nome}!`;
});

server.listen(8081, () => {
  console.log("Done");
});
