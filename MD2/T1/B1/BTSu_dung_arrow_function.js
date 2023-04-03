const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


];
// function totalMachineValue(inventorys){
//     let sum =0
//     for (let i = 0; i < inventorys.length; i++) {
//         if(inventorys[i].type === "machine") {
//             sum += inventorys[i].value;
//         }
//     }
//     return sum
// }
// console.log(totalMachineValue(inventory))





// let totalMachineValue = inventory.filter((item) =>{
//     if(item.type === "machine") {
//         return item.value;
//     }
// }).reduce((a,v)=> a + v.value,0)
// console.log(totalMachineValue);



// let totalMachineValue = inventory.filter((item)=>{
//     if (item.type === "machine"){
//         return item.value;
//     }
// }).reduce((sum,item) => {
//     return sum + item.value
// },0);
// console.log(totalMachineValue);


// let totalMachineValue = inventory
//     .filter((item)=>item.type=== "machine")
//     .reduce((sum,item)=>sum+item.value,0);
// console.log(totalMachineValue);

const numbers = [1, 2, 3, 4, 5];

const filteredNumbers = numbers.filter((number) =>{
    return number % 2 === 0;
});

console.log(filteredNumbers); // [2, 4]