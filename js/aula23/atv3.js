const carro = {
    modelo: "Gol",
    marca: "Volkswagen",
    cor: "Vermelho",
    potenciaCV: 80,
    preco: 3000000
}

const { preco, ...carroDeGraca} = carro;
console.log(carroDeGraca);