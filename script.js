let visor = document.querySelector('div#visor')

let btnClear = document.querySelector('input#btnClear')
btnClear.addEventListener('click', clear)
let btnVoltar = document.querySelector('input#btnVoltar')
btnVoltar.addEventListener('click', voltar)
let btnDividir = document.querySelector('input#btnDividir')
btnDividir.addEventListener('click', dividir)
let btnMultiplicar = document.querySelector('input#btnMultiplicar')
btnMultiplicar.addEventListener('click', multiplicar)
let btn7 = document.querySelector('input#btn7')
btn7.addEventListener('click', sete)
let btn8 = document.querySelector('input#btn8')
btn8.addEventListener('click', oito)
let btn9 = document.querySelector('input#btn9')
btn9.addEventListener('click', nove)
let btnDiminuir = document.querySelector('input#btnDiminuir')
btnDiminuir.addEventListener('click', diminuir)
let btn4 = document.querySelector('input#btn4')
btn4.addEventListener('click', quatro)
let btn5 = document.querySelector('input#btn5')
btn5.addEventListener('click', cinco)
let btn6 = document.querySelector('input#btn6')
btn6.addEventListener('click', seis)
let btnSomar = document.querySelector('input#btnSomar')
btnSomar.addEventListener('click', somar)
let btn1 = document.querySelector('input#btn1')
btn.addEventListener('click', um)
let btn2 = document.querySelector('input#btn2')
btn2.addEventListener('click', dois)
let btn3 = document.querySelector('input#btn3')
btn3.addEventListener('click', tres)
let btnIgual = document.querySelector('input#btnIgual')
btnIgual.addEventListener('click', igual)
let btn0 = document.querySelector('input#btn0')
btn0.addEventListener('click', zero)
let btnPonto = document.querySelector('input#btnPonto')
btnPonto.addEventListener('click', ponto)


let contador = 0

function clear() {
    contador = ''
    visor.innerText = contador
}

function voltar() {
    contador = ''
    visor.innerText = contador
}

function dividir() {
    contador = '÷'
    visor.innerText = contador
}

function multiplicar() {
    contador = 'x'
    visor.innerText = contador
}

function sete() {
    contador = 7
    visor.innerText = contador
}

function oito() {
    contador = 8
    visor.innerText = contador
}

function nove() {
    contador = 9
    visor.innerText = contador
}

function diminuir() {
    contador = '-'
    visor.innerText = contador
}

function quatro() {
    contador = 4
    visor.innerText = contador
}

function cinco() {
    contador = 5
    visor.innerText = contador
}

function seis() {
    contador = 6
    visor.innerText = contador
}

function somar() {
    contador = '+'
    visor.innerText = contador
}

function um() {
    contador = 1
    visor.innerText = contador
}

function dois() {
    contador = 2
    visor.innerText = contador
}

function tres() {
    contador = 3
    visor.innerText = contador
}

function igual() {
    contador = '='
    visor.innerText = contador
}

function zero() {
    contador = 0
    visor.innerText = contador
}

function ponto() {
    contador = '.'
    visor.innerText = contador
}