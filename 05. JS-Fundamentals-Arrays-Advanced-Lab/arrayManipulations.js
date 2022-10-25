function arrayManipulations(arr) {
    
    let newArr = arr.shift().split(" ").map(Number)

    for(let i = 0; i<arr.length;i++){
        let [command,firstNum,secNum]= arr[i].split(" ");
        firstNum = Number(firstNum)
        secNum = Number(secNum)
        if(command === `Add`){
            newArr.push(firstNum)
        }else if(command === "Remove"){
           newArr =  newArr.filter(x => x !== firstNum)
        }else if(command === "RemoveAt"){
            newArr.splice(firstNum,1)
        }else if(command === "Insert"){
            newArr.splice(secNum,0,firstNum)
        }
    }
    console.log(newArr.join(" "));
    
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)