function opcaoPvp(){
    let numeroP1 = Number(prompt("Digite um número para ser adivinhado: "))
    let numeroP2 = Number(prompt("Digite um número para tentar adivinhar: "))

    switch(numeroP2){
        case numeroP1:
            alert("Parabéns")
        break

       default:
            alert("Você errou")
        break
    }
}

alert(opcaoPvp)