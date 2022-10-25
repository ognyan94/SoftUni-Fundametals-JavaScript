function amazingNumbers(num) {
    let stringNum = num.toString().split("")
    let res = 0
    for(let number of stringNum){
        res += Number(number)
    }
    if(res.toString().includes(9)){
        console.log(`${num} Amazing? True`);
    }else{
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233)