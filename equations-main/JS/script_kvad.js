var on_off = 0
var kof
var otvet
function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function kvad_off(otvet1, otvet2) {
    let equation = ""
    let kof = Random(2, 4)
    if (otvet1 > 0 && otvet2 > 0) {
        equation = `x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2} = 0`
    }
    else if (otvet1 < 0 && otvet2 < 0) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2} = 0`
    }


    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² - ${otvet1 + otvet2}x - ${-1 * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x - ${-1 * otvet1 * otvet2} = 0`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² - ${otvet1 + otvet2}x - ${-1 * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x - ${-1 * otvet1 * otvet2} = 0`
    }


    else if (otvet1 == 0 && otvet2 > 0) {
        equation = `x² - ${otvet2}x  = 0`
    }
    else if (otvet1 == 0 && otvet2 < 0) {
        equation = `x² + ${-1 * otvet2}x = 0`
    }
    
    else if (otvet1 > 0 && otvet2 == 0) {
        equation = `x² - ${otvet1}x  = 0`
    }
    else if (otvet1 < 0 && otvet2 == 0) {
        equation = `x² + ${-1 * otvet1}x = 0`
    }


    else if (otvet1 == 0 && otvet2 == 0) {
        equation = `x² = 0`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 == 0)) {
        equation = `x² - ${-1 * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 == 0)) {
        equation = `x² - ${-1 * otvet1 * otvet2} = 0`
    }
    
    return equation
}


function kvad_on(otvet1, otvet2) {
    let equation = ""
    let kof = Random(2, 4)
    if (otvet1 > 0 && otvet2 > 0) {
        equation = `${kof}x² - ${kof * (otvet1 + otvet2)}x + ${kof * otvet1 * otvet2} = 0`
    }
    else if (otvet1 < 0 && otvet2 < 0) {
        equation = `${kof}x² + ${-1 * kof * (otvet1 + otvet2)}x + ${kof * otvet1 * otvet2} = 0`
    }


    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
        equation = `${kof}x² - ${kof * (otvet1 + otvet2)}x - ${-1 * kof * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
        equation = `${kof}x² + ${-1 * (kof * (otvet1 + otvet2))}x - ${-1 * kof * otvet1 * otvet2} = 0`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
        equation = `${kof}x² - ${kof * (otvet1 + otvet2)}x - ${-1 * kof * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
        equation = `${kof}x² + ${-1 * kof * (otvet1 + otvet2)}x - ${-1 * kof * otvet1 * otvet2} = 0`
    }


    else if (otvet1 == 0 && otvet2 > 0) {
        equation = `${kof}x² - ${kof *otvet2}x  = 0`
    }
    else if (otvet1 == 0 && otvet2 < 0) {
        equation = `${kof}x² + ${-1 * kof * otvet2}x = 0`
    }
    
    else if (otvet1 > 0 && otvet2 == 0) {
        equation = `${kof}x² - ${kof * otvet1}x  = 0`
    }
    else if (otvet1 < 0 && otvet2 == 0) {
        equation = `${kof}x² + ${-1 * kof * otvet1}x = 0`
    }


    else if (otvet1 == 0 && otvet2 == 0) {
        equation = `${kof}x² = 0`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 == 0)) {
        equation = `${kof}x² - ${-1 * kof * (otvet1 * otvet2)} = 0`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 == 0)) {
        equation = `${kof}x² - ${-1 * kof * (otvet1 * otvet2)} = 0`
    }
    
    return equation
}


var otvet1 = Random(-20, 20)
var otvet2 = Random(-20, 20)

const btn = document.getElementById('button');
const urovnenie = document.getElementById('urovnenie');
const otvet_na = document.getElementById('otvet_na');

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
        var otvet1 = Random(-30, 30)
        var otvet2 = Random(-30, 30)
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = kvad_on(otvet1, otvet2);
        otvet_na.innerHTML = String(otvet);
    }
    else {
        var otvet1 = Random(-8, -1)
        var otvet2 = Random(1, 8)  
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = kvad_off(otvet1, otvet2);
        otvet_na.innerHTML = String(otvet);
    }
}
