function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand
var otvet
var otvet1
var otvet2
var kof
var random
var ravno
var equation
var on_off = 0
const btn = document.getElementById('button');
const urovnenie = document.getElementById('urovnenie');
const otvet_na = document.getElementById('otvet_na');

function module_off (otvet) {
    // random = Random(0, 1)
    random = 2
    if (random == 0) {
        ravno = otvet
        var otvet1 = otvet
        var otvet2 = (-1) * otvet
        equation = `|x| = ${ravno}`
    }
    else if (random == 1) {
        ravno = otvet
        var otvet1 = otvet
        var otvet2 = (-1) * otvet
        equation = `|-x| = ${ravno}`
    }
    else if (random == 2) {
        ravno = otvet
        kof = Random(1, 9)
        var otvet1 = ravno + kof
        var otvet2 = ((-1) * ravno) + kof
        equation = `|x - ${kof}| = ${ravno}`
    }
    return equation
}

function fun1() {
    var chbox;
    chbox=document.getElementById('one');
    if (chbox.checked) {
        on_off = 1;
    }
    else {
        on_off = 0;
    }
}
btn.onclick = function() {
    if (on_off == 1) {
        var otvet1 = Random(-20, -5)
        var otvet2 = Random(5, 20)
        var osnov = Random(2, 20)
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = log_on(otvet1, otvet2);
        otvet_na.innerHTML = String(otvet);
    }
    else {
        var rand = Random(1, 9)
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = module_off(rand);
        otvet_na.innerHTML = otvet
        }
}
