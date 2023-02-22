const horas = document.getElementById("horas");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minutos = dateToday.getMinutes();
    let secnds = dateToday.getSeconds();

    if (hour < 10) hour = `0${hour}`;

    if (minutos < 10) minutos = `0${minutos}`;

    if (secnds < 10) secnds = `0${secnds}`;

    horas.textContent = hour;
    minutes.textContent = minutos;
    seconds.textContent = secnds;
});