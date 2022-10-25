function phoneShop(array) {
    let arrayOfPhones = array.shift().split(", ")
    
    let commands = array.shift()
    while (commands !== "End") {
        let line = commands.split(" - ")
        let action = line[0]
        let phone = line[1]

        switch (action) {
            case "Add":
                if(!arrayOfPhones.includes(phone)){
                    arrayOfPhones.push(phone)
                }
                break;
            case "Remove":
                if(arrayOfPhones.includes(phone)){
                    arrayOfPhones.splice(arrayOfPhones.indexOf(phone),1)
                }
                break;
            case "Bonus phone":
                let newAndOldPhone = phone.split(":")
                let oldPhone = newAndOldPhone[0]
                let newPhone = newAndOldPhone[1]
                if(arrayOfPhones.includes(oldPhone)){
                    arrayOfPhones.splice(arrayOfPhones.indexOf(oldPhone)+1,0,newPhone)
                }
                break;
            case "Last":
                if(arrayOfPhones.includes(phone)){
                   let findPhone = arrayOfPhones.splice(arrayOfPhones.indexOf(phone),1)
                    arrayOfPhones.push(findPhone.toString())
                }
                break;
        
        }


        commands = array.shift()
    }
console.log(arrayOfPhones.join(", "));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])

console.log("-----------------------");
phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])

console.log("-----------------------");
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])
