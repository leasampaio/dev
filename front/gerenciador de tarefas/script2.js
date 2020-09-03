button = document.querySelector("button");
div = document.querySelector("div");

div.addEventListener("click", () => alert("Div clicada"));
button.addEventListener("click", () => {
    event.stopPropagation() 
    alert("Botão clicado")
})

