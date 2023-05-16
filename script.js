var hora = document.querySelector("#hora")
var minuto = document.querySelector("#minuto")
var segundo = document.querySelector("#segundo")


var segu = document.querySelector("#tempoSegundo")


const relogio = setInterval(function time() {
    let horaDIa = new Date();
    let hr = horaDIa.getHours();
    let min = horaDIa.getMinutes();
    let seg = horaDIa.getSeconds();

    if (hr < 10) hr = '0' + hr ;

    if (min < 10) min = '0' + min ;

    if (seg < 10) seg = '0' + seg ;

    hora.innerHTML = hr
    minuto.innerHTML = min
    segundo.innerHTML = seg


})