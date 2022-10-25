function printNthElement(arr) {
    let currentArr = []
    let steps = Number(arr.pop())
    for(let i = 0;i<=arr.length-1;i+=steps){
        currentArr.push(arr[i]);
    }
    console.log(currentArr.join(" "));
}
printNthElement(['5', '20', '31', '4', '20', '2'])