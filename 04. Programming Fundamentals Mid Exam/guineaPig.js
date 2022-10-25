function guineaPig(array) {
    let foodInGrams = Number(array[0]) * 1000;
    let hayInGrams = Number(array[1]) * 1000;
    let coverInGrams = Number(array[2]) * 1000;
    let weightInGrams = Number(array[3]) * 1000;

    let haveFood = true
    for(let i = 1;i<=30;i++){
        foodInGrams -= 300
        if(i%2 === 0){
            hayInGrams -= foodInGrams * 0.05;
        }
        if(i%3===0){
            coverInGrams -= weightInGrams / 3;
        }

        if(foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0){
            console.log("Merry must go to the pet store!");
            haveFood = false;
            break
        }
    }
    if(haveFood){
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams/1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    }
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])


