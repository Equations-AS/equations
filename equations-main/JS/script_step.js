function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var otvet1
var otvet2
var pod_log
var pod_log1
var kof
var kof3
var kvad_ur
var on_off = 0
var osnov
var ravno
var otvet
var random
var equation
const btn = document.getElementById('button');
const urovnenie = document.getElementById('urovnenie');
const otvet_na = document.getElementById('otvet_na');

function kvad(otvet1, otvet2) {
    let equation = ""
    if (otvet1 > 0 && otvet2 > 0) {
        equation = `x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2}`
    }
    else if (otvet1 < 0 && otvet2 < 0) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2}`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² - ${otvet1 + otvet2}x - ${-1 * otvet1 * otvet2}`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x - ${-1 * otvet1 * otvet2}`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² - ${otvet1 + otvet2}x - ${-1 * otvet1 * otvet2}`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x - ${-1 * otvet1 * otvet2}`
    }
    else if (otvet1 == 0 && otvet2 > 0) {
        equation = `x² - ${otvet2}x`
    }
    else if (otvet1 == 0 && otvet2 < 0) {
        equation = `x² + ${-1 * otvet2}x`
    }
    
    else if (otvet1 > 0 && otvet2 == 0) {
        equation = `x² - ${otvet1}x`
    }
    else if (otvet1 < 0 && otvet2 == 0) {
        equation = `x² + ${-1 * otvet1}x`
    }
    else if (otvet1 == 0 && otvet2 == 0) {
        equation = `x²`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 == 0)) {
        equation = `x² - ${-1 * otvet1 * otvet2}`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 == 0)) {
        equation = `x² - ${-1 * otvet1 * otvet2}`
    }
    return equation
}



function step_off(otvet1) {
    let equation = ""

    if ((otvet1 >= -3 && otvet1 <= 3) && otvet1 != 0) {
        let osnova = Random(2, 9)
        if (otvet1 > 0) {
            equation = `${osnova}<sup>x</sup> = ${osnova ** otvet1}`
        }
        else {
            equation = `${osnova}<sup>x</sup> = <sup>${1}</sup>/<sub>${osnova ** Math.abs(otvet1)}</sub>`
        }
    }
    else if (((otvet1 > 3 && otvet1 <= 5) || (otvet1 < -3 && otvet1 >= -5) && otvet1 != 0)) {
        let osnova = Random(2, 5)
        if (otvet1 > 0) {
            equation = `${osnova}<sup>x</sup> = ${osnova ** otvet1}`
        }
        else {
            equation = `${osnova}<sup>x</sup> = <sup>${1}</sup>/<sub>${osnova ** Math.abs(otvet1)}</sub>`
        }
    }
    else if (otvet1 == -6 || otvet1 == 6) {
        let osnova = Random(2, 3)
        if (otvet1 > 0) {
            equation = `${osnova}<sup>x</sup> = ${osnova ** otvet1}` 
        }
        else {
            equation = `${osnova}<sup>x</sup> = <sup>${1}</sup>/<sub>${osnova ** Math.abs(otvet1)}</sub>`
        }
    }
    else if (otvet1 >= 7 || otvet1 <= -7) {
        let osnova = 2
        if (otvet1 > 0) {
            equation = `${osnova}<sup>x</sup> = ${osnova ** otvet1}`
        }
        else {
            equation = `${osnova}<sup>x</sup> = <sup>${1}</sup>/<sub>${osnova ** Math.abs(otvet1)}</sub>`
        }
    }
    else if (otvet1 == 0) {
        let osnova = Random(2, 9)
        equation = `${osnova}<sup>x</sup> = ${1}`
    }

    return equation
}

function step_on(otvet1, otvet2) {
    random = Random(0, 2)
    if (random == 0) {
        osnov = Random(2, 20)
        kvad_ur = kvad(otvet1, otvet2)
        pod_log = `${kvad_ur} + 1`
        equation = `${osnov}<sup>${pod_log}</sup> = ${osnov}`
        return equation
    }
    else if (random == 1 || random == 2) {
        osnov = Random(2, 20)
        kof = Random(1, 5)
        kof3 = Random(2, 5)
        if (otvet1 > 0 && otvet2 > 0) {
            equation = `${osnov}<sup>${1 + kof3}x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        else if (otvet1 < 0 && otvet2 < 0) {
            equation = `${osnov}<sup>${1 + kof3}x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
    
    
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
            equation = `${osnov}<sup>${1 + kof3}x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
            equation = `${osnov}<sup>${1 + kof3}x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
            equation = `${osnov}<sup>${1 + kof3}x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
            equation = `${osnov}<sup>${1 + kof3}x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
    
    
        else if (otvet1 == 0 && otvet2 > 0) {
            equation = `${osnov}<sup>${1 + kof3}x² - ${otvet2}x + ${(kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        else if (otvet1 == 0 && otvet2 < 0) {
            equation = `${osnov}<sup>${1 + kof3}x² + ${-1 * otvet2}x + ${(kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        
        else if (otvet1 > 0 && otvet2 == 0) {
            equation = `${osnov}<sup>${1 + kof3}x² - ${otvet1}x + ${(kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        else if (otvet1 < 0 && otvet2 == 0) {
            equation = `${osnov}<sup>${1 + kof3}x² + ${-1 * otvet1}x + ${(kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
    
    
        else if (otvet1 == 0 && otvet2 == 0) {
            equation = `${osnov}<sup>${1 + kof3}x² + ${kof ** 2}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 == 0)) {
            equation = `${osnov}<sup>${1 + kof3}x² ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 == 0)) {
            equation = `${osnov}<sup>${1 + kof3}x² ${otvet1 * otvet2 + (kof ** 2)}</sup> = ${osnov}<sup>${kof3}x² + ${kof ** 2}</sup>`
        }
        return equation
    }
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
        urovnenie.innerHTML = step_on(otvet1, otvet2);
        otvet_na.innerHTML = String(otvet);
    }
    else {
        var otvet1 = Random(-10, 10)
        otvet = `x = ` + otvet1
        urovnenie.innerHTML = step_off(otvet1);
        otvet_na.innerHTML = otvet;
        }
}
