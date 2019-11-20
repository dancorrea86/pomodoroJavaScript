let minutos = 00
let segundos = 10
let tempo = minutos + ":" + segundos
let clock = document.getElementById("clock")
clock.innerHTML = tempo
let funciona = true;

function start() {
    while(funciona || minutos == 0 || segundos != 0) {
      contadorRelogio()
    }
}

function contadorRelogio() {
  segundos -= 1; clock.innerHTML = segundos
}

function cancela() {
  funciona = false
}