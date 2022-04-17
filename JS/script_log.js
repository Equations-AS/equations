function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var otvet1
var otvet2
var pod_log
var pod_log1
var kof
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
        equation = `x² — ${otvet1 + otvet2}x + ${otvet1 * otvet2}`
    }
    else if (otvet1 < 0 && otvet2 < 0) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2}`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² — ${otvet1 + otvet2}x — ${-1 * otvet1 * otvet2}`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x — ${-1 * otvet1 * otvet2}`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² — ${otvet1 + otvet2}x — ${-1 * otvet1 * otvet2}`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}x — ${-1 * otvet1 * otvet2}`
    }
    else if (otvet1 == 0 && otvet2 > 0) {
        equation = `x² — ${otvet2}x`
    }
    else if (otvet1 == 0 && otvet2 < 0) {
        equation = `x² + ${-1 * otvet2}x`
    }
    
    else if (otvet1 > 0 && otvet2 == 0) {
        equation = `x² — ${otvet1}x`
    }
    else if (otvet1 < 0 && otvet2 == 0) {
        equation = `x² + ${-1 * otvet1}x`
    }
    else if (otvet1 == 0 && otvet2 == 0) {
        equation = `x²`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
        equation = `x² — ${-1 * otvet1 * otvet2}`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
        equation = `x² — ${-1 * otvet1 * otvet2}`
    }
    return equation
}

function log_off(osnov) {
    random = Random(0, 1)
    if (random == 0) {
        ravno = Random(1, 3)
        otvet = osnov ** ravno
        equation = `log<sub>x</sub>(${otvet}) = ${ravno}`
        equation = String(equation)
        return equation 
    }
    else if (random == 1) {
        ravno = Random(-3, -1)
        otvet = `<sup>1</sup>/<sub>${osnov ** (ravno * (-1))}</sub>`
        equation = `log<sub>x</sub>(${otvet}) = ${ravno}`
        equation = String(equation)
        return equation
    }
}

function log_on(otvet1, otvet2) {
    random = Random(0, 4)
    if (random == 0) {
        osnov = Random(2, 20)
        kvad_ur = kvad(otvet1, otvet2)
        pod_log = `${kvad_ur} + 1`
        equation = `log<sub>${osnov}</sub>(${pod_log}) = 0`
        return equation
    }
    else if (random == 1 || random == 2) {
        osnov = Random(2, 20)
        pod_log1 = Random(1, 24)
        let equation = ""
        if (otvet1 > 0 && otvet2 > 0) {
            equation = `log<sub>${osnov}</sub>(x² - ${otvet1 + otvet2}x + ${(otvet1 * otvet2) + pod_log1}) = log<sub>${osnov}</sub>(${pod_log1}) `
        }
        else if (otvet1 < 0 && otvet2 < 0) {
            equation = `log<sub>${osnov}</sub>(x² + ${-1 * (otvet1 + otvet2)}x + ${(otvet1 * otvet2) + pod_log1}) = log<sub>${osnov}</sub>(${pod_log1})        `
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
            equation = `log<sub>${osnov}</sub>(x² - ${otvet1 + otvet2}x ${pod_log1 + (otvet1 * otvet2)}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
            equation = `log<sub>${osnov}</sub>(x² + ${-1 * (otvet1 + otvet2)}x ${pod_log + (otvet1 * otvet2)}) = log<sub>${osnov}</sub>(${pod_log1})`
        }


        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
            equation = `log<sub>${osnov}</sub>(x² - ${otvet1 + otvet2}x ${pod_log1 + (otvet1 * otvet2)}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
            equation = `log<sub>${osnov}</sub>(x² + ${-1 * (otvet1 + otvet2)}x ${pod_log1 + (otvet1 * otvet2)}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if (otvet1 == 0 && otvet2 > 0) {
            equation = `log<sub>${osnov}</sub>(x² - ${otvet2}x + ${pod_log1}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if (otvet1 == 0 && otvet2 < 0) {
            equation = `log<sub>${osnov}</sub>(x² + ${-1 * otvet2}x + ${pod_log1}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        
        else if (otvet1 > 0 && otvet2 == 0) {
            equation = `log<sub>${osnov}</sub>(x² - ${otvet1}x + ${pod_log1}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if (otvet1 < 0 && otvet2 == 0) {
            equation = `log<sub>${osnov}</sub>(x² + ${-1 * otvet1}x + ${pod_log1}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if (otvet1 == 0 && otvet2 == 0) {
            equation = `log<sub>${osnov}</sub>(x² + ${pod_log1}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
            equation = `log<sub>${osnov}</sub>(x² ${pod_log1 + (otvet1 * otvet2)}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
            equation = `log<sub>${osnov}</sub>(x² ${pod_log1 + (otvet1 * otvet2)}) = log<sub>${osnov}</sub>(${pod_log1})`
        }
        return equation
    }
    else if (random == 3) {
        osnov = Random(2, 20)
        pod_log1 = Random(1, 25)
        kvad_ur = kvad(otvet1, otvet2)
        pod_log = `${kvad_ur} + ${pod_log1}`
        equation = `log<sub>${osnov}</sub>((${pod_log})²) = log<sub>${osnov}</sub>(${pod_log1 ** 2})`
        return equation
    }
    else if (random == 4) {
        osnov = Random(2, 20)
        pod_log1 = Random(1, 100)
        kof = Random(2, 9)
        kvad_ur = kvad(otvet1, otvet2)
        pod_log = `${kof}x² + ${kvad_ur} + ${pod_log1}`
        equation = `log<sub>${osnov}</sub>(${pod_log}) = log<sub>${osnov}</sub>(${kof}x² + ${pod_log1})`
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
        urovnenie.innerHTML = log_on(otvet1, otvet2);
        otvet_na.innerHTML = String(otvet);
    }
    else {
        var osnov = Random(1, 10)
        urovnenie.innerHTML = log_off(osnov);
        otvet_na.innerHTML = osnov
        }
}
