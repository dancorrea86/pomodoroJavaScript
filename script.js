let minutos = 2
let segundos = 10
let tempo = minutos + ":" + segundos
let clock = document.getElementById("clock")
clock.innerHTML = tempo
let sec = 60
let funciona = true;

function start() {
    funciona = true;
    console.log("run")
    var relogio = setInterval(function() {
      if (minutos == 0 || funciona == false) {
      clearInterval(relogio)
    } else {
      contadorRelogio()
    }}, 1000) 
}

function contadorRelogio() {
  console.log(clock, minutos)
  for(minutos; minutos==0; minutos--) {
    console.log(minutos)
    for(segundos; segundos==0; segundos--) {
      console.log(clock)
      clock.innerHTML = minutos + ":" + segundos
    }
  }
}

function cancela() {
  console.log("parado")
  funciona = false
}