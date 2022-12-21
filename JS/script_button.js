function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand

const btn = document.getElementById('button');
const random = document.getElementById('random');

btn.onclick = function() {
    var rand = Random(0, 6)
    if (rand == 0) {
        random.innerHTML = '<a href="https://equations-online.ru/pages/lin">Нажми</a>';
    }
    else if (rand == 1) {
        random.innerHTML = '<a href="https://equations-online.ru/pages/kvad">Нажми</a>';
    }
    else if (rand == 2) {
        random.innerHTML = '<a href="https://equations-online.ru/pages/log">Нажми</a>';
    }
    else if (rand == 3) {
        random.innerHTML = '<a href="https://equations-online.ru/pages/module">Нажми</a>';
    }
    else if (rand == 4) {
        random.innerHTML = '<a href="https://equations-online.ru/pages/kor">Нажми</a>';
    }
    else if (rand == 5) {
        random.innerHTML = '<a href="https://equations-online.ru/pages/step">Нажми</a>';
    }
    else if (rand == 6) {
        random.innerHTML = '<a href="https://equations-online.ru/pages/drob">Нажми</a>';
    }
}
