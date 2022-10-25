function numberModification(number) {
let getAverDigit = num => num.toString().split("").map(Number).reduce((a,b) => a + b ,0) / num.toString().length

    while(getAverDigit(number) < 5){
        number += "9"
    }
    console.log(number);
}

numberModification(101);
