const fs = require("fs");
const stream = fs.createReadStream ('countries.csv');
const csvParser = require('csv-parser');

let conteudo =[];
stream.pipe(csvParser()).on('data', (data)=>{
    conteudo.push ({
        Country: data['Country'].trim(),
        Region: data ['Region'].trim(),
        Population: Number(data['Population']),
        "Pop. Density (per sq. mi.)": Number(data['Pop. Density (per sq. mi.)'].replace(',','.'))
    });
    console.log("Conteúdo", conteudo[0]);
})