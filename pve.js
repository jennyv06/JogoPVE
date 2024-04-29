var numeroRandomizado = 0
var resultadoObj = document.getElementById("resultado")

function AdivinharNumero() {
    let numeroEscolhidoObj = document.getElementById("numeroEscolhido")
    let numeroEscolhidoNum = numeroEscolhidoObj.value

    if(numeroEscolhidoNum == numeroRandomizado) {
        console.log("Acertou!")
        resultadoObj.innerHTML = "<p>Acertou. Novo número mágico gerado!</p>"
        RandomizarNumero()
        
    } else {
        resultadoObj.innerHTML = "<p>Errou."
        if(numeroEscolhidoNum > numeroRandomizado)
            resultadoObj.innerHTML += " O número mágico é menor!</p>"
        else    
            resultadoObj.innerHTML += " O número mágico é maior!</p>"
    }

    console.log(numeroRandomizado)
}

function RandomizarNumero() {
    let dificuldadeObj = document.getElementById("dificuldade")
    let dificuldadeNum = dificuldadeObj.value

    if(dificuldadeNum == 1) 
        numeroRandomizado = Math.floor(Math.random() * 10); 
    else if(dificuldadeNum == 2)
        numeroRandomizado = Math.floor(Math.random() * 100); 
    else if(dificuldadeNum ==3)
        numeroRandomizado = Math.floor(Math.random() * 1000); 
}

function GerarNovoNumero() {
    RandomizarNumero()
    resultadoObj.innerHTML = "<p>Novo número mágico gerado</p>"
}