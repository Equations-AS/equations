function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var on_off = 0
var otvet1
var otvet
var kof
const btn = document.getElementById('button');
const urovnenie = document.getElementById('urovnenie');
const otvet_na = document.getElementById('otvet_na');

function drob_off(otvet1, otvet2) {
    let equation1 = ""
    let equation2 = ""
    let equationLast = ""
    if (otvet1 > 0 ) {
        equation1 = `(x - ${otvet1})`
    }
    else if (otvet1 < 0){
        equation1 = `(x + ${-1 * otvet1})`
    }
    else {
        equation1 = `x`
    }


    if (otvet2 > 0 ) {
        equation2 = `(x - ${otvet2})`
    }
    else if (otvet2 < 0){
        equation2 = `(x + ${-1 * otvet2})`
    }
    else {
        equation2 = `x`
    }

    equationLast = `${equation1} \n &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp———— = 0 \n ${equation2}`
    
    return equationLast
     
}

function drob_on(otvet1, otvet2, otvet3) {
    let equation1 = ""
    let equation2 = ""
    if (otvet1 > 0 && otvet2 > 0) {
        equation1 = `(x² - ${otvet1 + otvet2}x + ${otvet1 * otvet2})`
    }
    else if (otvet1 < 0 && otvet2 < 0) {
        equation1 = `(x² + ${-1 * (otvet1 + otvet2)}x + ${otvet1 * otvet2})`
    }


    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 > 0)) {
        equation1 = `(x² - ${otvet1 + otvet2}x - ${-1 * otvet1 * otvet2})`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 < 0)) {
        equation1 = `(x² + ${-1 * (otvet1 + otvet2)}x - ${-1 * otvet1 * otvet2})`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 > 0)) {
        equation1 = `(x² - ${otvet1 + otvet2}x - ${-1 * otvet1 * otvet2})`
    }
    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 < 0)) {
        equation1 = `(x² + ${-1 * (otvet1 + otvet2)}x - ${-1 * otvet1 * otvet2})`
    }


    else if (otvet1 == 0 && otvet2 > 0) {
        equation1 = `(x² - ${otvet2}x)`
    }
    else if (otvet1 == 0 && otvet2 < 0) {
        equation1 = `(x² + ${-1 * otvet2}x)`
    }
    
    else if (otvet1 > 0 && otvet2 == 0) {
        equation1 = `(x² - ${otvet1}x)`
    }
    else if (otvet1 < 0 && otvet2 == 0) {
        equation1 = `(x² + ${-1 * otvet1}x)`
    }


    else if (otvet1 == 0 && otvet2 == 0) {
        equation1 = `x²`
    }


    else if ((otvet1 < 0 && otvet2 > 0) && (otvet1 + otvet2 >= 0)) {
        equation1 = `(x² - ${-1 * otvet1 * otvet2})`
    }
    else if ((otvet1 > 0 && otvet2 < 0) && (otvet1 + otvet2 <= 0)) {
        equation1 = `(x² - ${-1 * otvet1 * otvet2})`
    }

    
    if (otvet3 > 0 ) {
        equation2 = `(x - ${otvet3})`
    }
    else if (otvet3 < 0){
        equation2 = `(x + ${-1 * otvet3})`
    }
    else {
        equation2 = `x`
    }

    equationLast = `${equation1} \n &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp——————— = 0 \n ${equation2}`
    if (otvet3 != otvet1 && otvet3 != otvet2) {
        return equationLast
    } else {
        drob_on(otvet1, otvet2, otvet3 + 1)
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
        var otvet1 = Random(-20, 20)
        var otvet2 = Random(-20, 20)
        var otvet3 = Random(-20, 20)
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = `<pre>${drob_on(otvet1, otvet2, otvet3)}</pre>`;
        otvet_na.innerHTML = String(otvet);
    }
    else {
        var otvet1 = Random(-20, 20)
        var otvet2 = Random(-20, 20)
        var otvet3 = Random(-20, 20)
        otvet = `x<sub>1</sub> = ` + otvet1 + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp' + `x<sub>2</sub> = ` + otvet2
        urovnenie.innerHTML = `<pre>${drob_off(otvet1, otvet2)}</pre>`;
        otvet_na.innerHTML = otvet
        }
}
