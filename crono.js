let cronometroId = 0;

function iniciarCronometro() {

    document.getElementById("btnIniciar").style.display = 'none';
    document.getElementById("btnZerar").style.display = 'inline';

    let timer_horas = document.getElementById("timer_horas");
    let timer_minutos = document.getElementById("timer_minutos");
    let timer_segundos = document.getElementById("timer_segundos");
    let timer_decimo = document.getElementById("timer_decimo");

    let h = 0;
    m = 0;
    s = 0;
    d = 0;

    cronometroId = setInterval(function() {
        timer_horas.innerHTML = h < 10 ? '0' + h : h;
        timer_minutos.innerHTML = m < 10 ? '0' + m : m;
        timer_segundos.innerHTML = s < 10 ? '0' + s : s;
        timer_decimo.innerHTML = d < 10 ? '0' + d : d;

        if (d < 9) { d += 1; } else if (s < 59) {
            d = 0;
            s += 1;
        } else if (m < 59) {
            d = 0;
            s = 0;
            m += 1;
        } else if (h < 23) {
            d = 0;
            s = 0;
            m = 0;
            h += 1;
        } else { alert('O dia só tem 24 horas, chegamos ao limite!'); }


    }, 100);

}

function zerarCronometro() {

    document.getElementById("btnIniciar").style.display = 'inline';
    document.getElementById("btnZerar").style.display = 'none';

    clearInterval(cronometroId);

    document.getElementById("timer_horas").innerHTML = "00"
    document.getElementById("timer_minutos").innerHTML = "00"
    document.getElementById("timer_segundos").innerHTML = "00"
    document.getElementById("timer_decimo").innerHTML = "00"

}