function addAndRemove(arr) {
    let currentArr = []
    let numAdd = 1
    for(let i = 0;i<=arr.length-1;i++){
        
        if(arr[i] === "add"){
            currentArr.push(numAdd)
            numAdd++
        }else{
            currentArr.pop(i-1)
            numAdd++
        }
    }

    if(currentArr.length === 0){
        console.log("Empty");
    }else{
        console.log(currentArr.join(" "));
    }
}
addAndRemove(['remove', 'remove', 'remove'])