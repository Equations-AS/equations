function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var otvet = Random(1, 20)
var otvet1

function line(x){
        let equation
        let random = Random(0, 2)
        peremen1 = Random(0, 20)
        peremen2 = Random(0, 10)
        peremen3 = Random(0, 10)
        if (random == 0) {
            equation = 'x' + ` - ` + x
            return (String(equation) + ` = 0`)
        }
        else if (random == 1) {
            equation = 'x' + ` + ` + x
            otvet = otvet * (-1)
            return (String(equation) + ` = 0`)
        }
        else if (random == 2) {
            otvet1 = (Number(peremen1) + Number(x)) / (Number(peremen3) + Number(peremen2))
            if (otvet1 % 1 == 0){
                otvet = otvet1
                equation = peremen3 + 'x' + ` - ` + peremen1 + ` + ` + peremen2 + 'x' + ` - ` + x
                return (String(equation) + ` = 0`)
            }
            else {
                if (random == 0) {
                    equation = 'x' + ` - ` + x
                    return (String(equation) + ` = 0`)
                }
                else if (random == 1) {
                    equation = 'x' + ` + ` + x
                    otvet = otvet * (-1)
                    return (String(equation) + ` = 0`)
                }
            }
        }
}
console.log(line(otvet))
console.log(otvet)
