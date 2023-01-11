function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var otvet = Random(1, 20)
var otvet1
var on_off = 0
var kof

function line_off(x){
    let equation
    let random = Random(0, 1)
    if (random == 0) {
        equation = 'x' + ` - ` + x
        kof = 0
        return (String(equation) + ` = 0`)
    }
    else if (random == 1) {
        equation = 'x' + ` + ` + x
        otvet = otvet * (-1)
        kof = 1
        return (String(equation) + ` = 0`)
    }
}

function line_on(x){
    let equation
    let random = 0
    peremen1 = Random(1, 20)
    peremen2 = Random(1, 10)
    peremen3 = Random(2, 10)
    if (random == 0) {
        otvet1 = (Number(peremen1) + Number(x)) / (Number(peremen3) + Number(peremen2))
        if (otvet1 % 1 == 0){
            otvet = otvet1
            equation = peremen3 + 'x' + ` - ` + peremen1 + ` + ` + peremen2 + 'x' + ` - ` + x
            return (String(equation) + ` = 0`)
        }
        else {
            while (otvet1 % 1 != 0) {
                x = Random(1, 100)
                otvet1 = (Number(peremen1) + Number(x)) / (Number(peremen3) + Number(peremen2))
            }
            equation = peremen3 + 'x' + ` - ` + peremen1 + ` + ` + peremen2 + 'x' + ` - ` + x
            return (String(equation) + ` = 0`)
        }
    }
}

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
        var otvet = Random(1, 20)
        urovnenie.innerHTML = line_on(otvet);
        otvet_na.innerHTML = `x = ${otvet1}`;
    }
    else {
        var otvet = Random(1, 20)
        urovnenie.innerHTML = line_off(otvet);
        if (kof == 1) {
            otvet_na.innerHTML = `x = ${otvet * (-1)}`;
        }
        else {
            otvet_na.innerHTML = `x = ${otvet}`
        }
    }
}
