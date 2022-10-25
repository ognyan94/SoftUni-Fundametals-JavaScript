function counterStrike(array) {
    let energy = Number(array.shift())

    let command = array.shift()
    let countWinBattle = 0
    let wonBattle = true
    while (command !== "End of battle") {
        let powerEnemy= Number(command)
        
        if(energy < powerEnemy){
            wonBattle = false
            console.log(`Not enough energy! Game ends with ${countWinBattle} won battles and ${energy} energy`);
            break
        }else{
            countWinBattle++
           energy-=powerEnemy 
           if(countWinBattle % 3 === 0){
               energy += countWinBattle
           }
        }
        
        
        command = array.shift()
    }
    if(wonBattle){
        console.log(`Won battles: ${countWinBattle}. Energy left: ${energy}`);
    }
}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])


