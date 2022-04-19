function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x
var rand
var otvet
var otvet1
var otvet2
var kof
var kof2
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


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
        equation = `x² - ${-1 * otvet1 * otvet2}`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
        equation = `x² - ${-1 * otvet1 * otvet2}`
    }
    
    return equation
}

function kor_off (x) {
    random = Random(0, 1)
    if (random == 0) {
        kof = Random(1, 9)
        while ((x - kof) <= 0) {
            kof -= 1
        }
        kof2 = x - kof
        equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x - ${kof}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof2}</span>`
    }
    else if (random == 1) {
        kof = Random(1, 9)
        kof2 = x + kof
        equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x + ${kof}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof2}</span>`
    }
    return equation
}

function kor_on (otvet1, otvet2) {
    // random = Random(0, 2)
    random = 2
    if (random == 0) {
        equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">${kvad(otvet1, otvet2)}</span> = 0`
        return equation
    }
    else if (random == 1) {
        kof = Random(1, 5)
        if (otvet1 > 0 && otvet2 > 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
        else if (otvet1 < 0 && otvet2 < 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
    
    
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
    
    
        else if (otvet1 == 0 && otvet2 > 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet2}x + ${(kof ** 2)}</span> = ${kof}`
        }
        else if (otvet1 == 0 && otvet2 < 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * otvet2}x + ${(kof ** 2)}</span> = ${kof}`
        }
        
        else if (otvet1 > 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1}x + ${(kof ** 2)}</span> = ${kof}`
        }
        else if (otvet1 < 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * otvet1}x + ${(kof ** 2)}</span> = ${kof}`
        }
    
    
        else if (otvet1 == 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${kof ** 2}</span> = ${kof}`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² ${otvet1 * otvet2 + (kof ** 2)}</span> = ${kof}`
        }
        
        return equation
    }
    else if (random == 2) {
        kof = Random(1, 5)
        if (otvet1 > 0 && otvet2 > 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if (otvet1 < 0 && otvet2 < 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if (otvet1 == 0 && otvet2 > 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet2}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if (otvet1 == 0 && otvet2 < 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * otvet2}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        
        else if (otvet1 > 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if (otvet1 < 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * otvet1}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if (otvet1 == 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${kof ** 2}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    else if (random == 3) {
        kof = Random(1, 5)
        kof2 = Random(1, 5)
        kof3 = Random(1, 5)
        if (otvet1 > 0 && otvet2 > 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if (otvet1 < 0 && otvet2 < 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1 + otvet2}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * (otvet1 + otvet2)}x ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if (otvet1 == 0 && otvet2 > 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet2}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if (otvet1 == 0 && otvet2 < 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * otvet2}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        
        else if (otvet1 > 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² - ${otvet1}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if (otvet1 < 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${-1 * otvet1}x + ${(kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if (otvet1 == 0 && otvet2 == 0) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² + ${kof ** 2}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    
    
        else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
        else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
            equation = `<span>&#8730;</span><span  style="border-top: 1px solid black">x² ${otvet1 * otvet2 + (kof ** 2)}</span> = <span>&#8730;</span><span  style="border-top: 1px solid black">${kof ** 2}</span>`
        }
    return equation
    }
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
        var otvet1 = Random(-20, -6)
        var otvet2 = Random(6, 20)
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = kor_on(otvet1, otvet2);
        otvet_na.innerHTML = String(otvet);
    }
    else {
        var otvet = Random(2, 40)
        urovnenie.innerHTML = kor_off(otvet);
        otvet_na.innerHTML = otvet
        }
}
