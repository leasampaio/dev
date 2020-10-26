
const elementosDia = document.querySelectorAll(".dia")

fetch("https://extreme-ip-lookup.com/json/")
    .then(resposta =>{
        return resposta.json();
    })
    .then( respostaJson => {
        
        const cidade = respostaJson.city;
        const estado = respostaJson.region;

        const elementoCidade = document.querySelector("#cidade");
        elementoCidade.innerText = `${cidade}, ${estado}`;
        
        
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${respostaJson.lat}&lon=${respostaJson.lon}&units=metric&lang=pt_BR&appid=47b16d41765388e1d2e251b373b570c0`)
        .then (resposta => {
            return resposta.json();
        }).then(respostaJson => {
            
            for (let i = 0; i<elementosDia.length; i++){
                const elementoDia = elementosDia[i];
                const previsaoDoDia = respostaJson.daily[i];
                elementoDia.querySelector(".minima").innerText = previsaoDoDia.temp.min;
                elementoDia.querySelector(".maxima").innerText = previsaoDoDia.temp.max;
                elementoDia.querySelector(".descricao").innerText = previsaoDoDia.weather[0].description;

                let data;
                if (i===0){
                    data ="Hoje";
                }
                else if(i===1){
                    data = "Amanhã";
                }
                else{
                    data = `Daqui a ${i} dias`;
                }
                elementoDia.querySelector(".data").innerText = data;
                elementoDia.querySelector("img").setAttribute("src", `http://openweathermap.org/img/wn/${ previsaoDoDia.weather[0].icon}@2x.png`)



            }
        })
    })
    