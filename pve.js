function AdivinharNumero(numeroEscolhidoObj) {
    var numeroEscolhidoObj = document.getElementById("numeroEscolhido")
    let numeroEscolhidoNum = numeroEscolhidoObj.value

    let numeroRandomizado = RandomizarNumero(10);

    if(numeroEscolhidoObj == numeroRandomizado) {
        console.log("Acertou!")
    } else {
        console.log("Errou!")
    }
    console.log("Era "+numeroRandomizado)
}

function RandomizarNumero(max) {
    let numeroAleatorio = Math.floor(Math.random() * max); 

    return numeroAleatorio;
}