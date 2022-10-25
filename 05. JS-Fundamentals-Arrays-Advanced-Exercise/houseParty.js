function houseParty(arr) {
    
    let newArr = []
    for(let i = 0;i<arr.length;i++){
        let command = arr[i].split(" ")
        let name = command.shift()
        if(command.length === 2){
            if(!newArr.includes(name)){
                newArr.push(name)
            }else{
                console.log(`${name} is already in the list!`);
            }
        }else{
            if(newArr.includes(name)){
                newArr.splice(newArr.indexOf(name),1)
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(newArr.join("\n"));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)