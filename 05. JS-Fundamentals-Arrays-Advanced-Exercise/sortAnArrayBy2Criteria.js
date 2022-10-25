function sortAnArrayBy2Criteria(arr) {
    
let sortArr = arr.sort((a,b)=>{
    return a.length - b.length || a.localeCompare(b)
})
console.log(sortArr.join("\n"));
}
sortAnArrayBy2Criteria(	['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])