function Random (min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var otvet = Random(1, 20)

function line(x){
       let equation
       let random = Random(0, 1)
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
console.log(line(otvet))
console.log(otvet)
