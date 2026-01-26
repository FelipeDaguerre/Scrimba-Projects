let cartas = []
let soma = 0
let noJogo = false
let blackJack = false
let number


let msg = document.getElementById("mensagem-p")
let sumEl = document.getElementById("sum-p")
let cardsEl = document.getElementById("cards-p")


function gerarCarta() {
    number = Math.floor(Math.random() * 13) + 1
        if (number > 10){
            return 10
        }
        else if (number === 11){
            return 1
        }
    return number
}


function iniciarValores() {
    cartas = [gerarCarta(), gerarCarta()]
    soma = cartas.reduce((a, b) => a + b, 0)
}

function jogar() {
    noJogo = true
    blackJack = false

    iniciarValores()
    renderizarJogo()
}

function renderizarJogo() {
    cardsEl.textContent = "Cartas: " + cartas.join(", ")
    sumEl.textContent = "Soma: " + soma

    if (soma < 21) {
        msg.textContent = "Quer puxar mais uma carta?"
    }
    else if (soma === 21) {
        msg.textContent = "Você fez 21 pontos! Blackjack!"
        blackJack = true
        noJogo = false
    }
    else {
        msg.textContent = "Você passou de 21 pontos e perdeu"
        noJogo = false
    }
}

function puxarCarta() {
    if (noJogo === false) {
        return
    }

    let carta = gerarCarta()
    cartas.push(carta)
    soma += carta

    renderizarJogo()
}