function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function line(otvet) {
    let equation = ""
    if (otvet > 0 ) {
        equation = `x — ${otvet} = 0`
    }
    else {
        equation = `x + ${-1 * otvet} = 0`
    }
    return equation
}

function kvad(otvet1, otvet2) {
    let equation = ""
    if (otvet1 > 0 && otvet2 > 0) {
        equation = `x² — ${otvet1 + otvet2}*x + ${otvet1 * otvet2} = 0`
    }
    else if (otvet1 < 0 && otvet2 < 0) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}*x + ${otvet1 * otvet2} = 0`
    }


    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² — ${otvet1 + otvet2}*x — ${-1 * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}*x — ${-1 * otvet1 * otvet2} = 0`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
        equation = `x² — ${otvet1 + otvet2}*x — ${-1 * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
        equation = `x² + ${-1 * (otvet1 + otvet2)}*x — ${-1 * otvet1 * otvet2} = 0`
    }


    else if (otvet1 == 0 && otvet2 > 0) {
        equation = `x² — ${otvet2}*x  = 0`
    }
    else if (otvet1 == 0 && otvet2 < 0) {
        equation = `x² + ${-1 * otvet2}*x = 0`
    }
    
    else if (otvet1 > 0 && otvet2 == 0) {
        equation = `x² — ${otvet1}*x  = 0`
    }
    else if (otvet1 < 0 && otvet2 == 0) {
        equation = `x² + ${-1 * otvet1}*x = 0`
    }


    else if (otvet1 == 0 && otvet2 == 0) {
        equation = `x² = 0`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
        equation = `x² — ${-1 * otvet1 * otvet2} = 0`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
        equation = `x² — ${-1 * otvet1 * otvet2} = 0`
    }
    
    return equation
}


var otvet1 = Random(-20, -1)
var otvet2 = Random(1, 20)

console.log(kvad(20, -20))
