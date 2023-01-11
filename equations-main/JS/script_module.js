function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var otvet
var otvet1
var otvet2
var kof
var kof3
var random
var ravno
var equation
var on_off = 0
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
        equation = `x² + ${-1 * otvet1}x `
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

function module_off (kof, ravno, random) {
    if (random == 0) {
        otvet1 = ravno + kof
        otvet2 = ((-1) * ravno) + kof
        equation = `|x - ${kof}| = ${ravno}`
    }
    else if (random == 1) {
        otvet1 = ravno - kof
        otvet2 = ((-1) * ravno) - kof
        equation = `|x + ${kof}| = ${ravno}`
    }
    return equation
}

function module_on (otvet1, otvet2) {
    random = Random(0, 1)
    if (random == 0) {
        equation = `|${kvad(otvet1, otvet2)}| = 0`
    }
    else if (random == 1) {
        kof = Random(1, 5)
        kof3 = Random(2, 5)
        if (otvet1 > 0 && otvet2 > 0) {
            equation = `|${1 + kof3}x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
        else if (otvet1 < 0 && otvet2 < 0) {
            equation = `|${1 + kof3}x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
    
    
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
            equation = `|${1 + kof3}x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
            equation = `|${1 + kof3}x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
            equation = `|${1 + kof3}x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
            equation = `|${1 + kof3}x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
    
    
        else if (otvet1 == 0 && otvet2 > 0) {
            equation = `|${1 + kof3}x² - ${otvet2}x + ${(kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
        else if (otvet1 == 0 && otvet2 < 0) {
            equation = `|${1 + kof3}x² + ${-1 * otvet2}x + ${(kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
        
        else if (otvet1 > 0 && otvet2 == 0) {
            equation = `|${1 + kof3}x² - ${otvet1}x + ${(kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
        else if (otvet1 < 0 && otvet2 == 0) {
            equation = `|${1 + kof3}x² + ${-1 * otvet1}x + ${(kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
    
    
        else if (otvet1 == 0 && otvet2 == 0) {
            equation = `|${1 + kof3}x² + ${kof ** 2}| = |${kof3}x² + ${kof ** 2}|`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 == 0)) {
            equation = `|${1 + kof3}x² ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 == 0)) {
            equation = `|${1 + kof3}x² ${otvet1 * otvet2 + (kof ** 2)}| = |${kof3}x² + ${kof ** 2}|`
        }
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
        var otvet1 = Random(-20, 20)
        var otvet2 = Random(-20, 20)
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = module_on(otvet1, otvet2);
        otvet_na.innerHTML = String(otvet);
    }
    else {
        var random = Random(0, 1)
        var kof = Random(1, 9)
        var ravno = Random(1, 9)
        if (random == 0) {
            otvet1 = ravno + kof
            otvet2 = ((-1) * ravno) + kof
        }
        else if (random == 1) {
            otvet1 = ravno - kof
            otvet2 = ((-1) * ravno) - kof
        }
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = module_off(kof, ravno, random);
        otvet_na.innerHTML = otvet
        }
}
