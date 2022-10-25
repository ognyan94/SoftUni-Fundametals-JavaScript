function numbers(array) {
    
    let arrayOfNum = array.shift().split(" ").map(Number)

    let commands = array.shift()

    while (commands !== "Finish") {
        let line = commands.split(" ")
        let action = line[0]
        let value = Number(line[1])
        let repl = Number(line[2])

        switch (action) {
            case "Add":
                    arrayOfNum.push(value)
                break;
        
            case "Remove":
                if(arrayOfNum.includes(value)){
                    arrayOfNum.splice(arrayOfNum.indexOf(value),1)
                }
                break;
        
            case "Replace":
                if (arrayOfNum.includes(value)) {
                    arrayOfNum.splice(arrayOfNum.indexOf(value),1,repl)
                }
                break;
        
            case "Collapse":
                arrayOfNum = arrayOfNum.filter(x => x >= value)
                break;
        }

        commands = array.shift()
    }
    console.log(arrayOfNum.join(" "));

}
numbers(["1 20 -1 10",
"Collapse 8",
"Finish"])
console.log("-------------");
numbers(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])

console.log("-------------");
numbers(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])

