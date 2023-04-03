// function replace(array, from, to, elements) {
//     // array.splice.apply(array, [from, to - from].concat(elements))
//     array.splice(from,to - from,...elements);
// }
// let testArray = [1, 2, 100, 100, 6]
// replace(testArray, 2, 4, [3, 4, 5])
// console.log(testArray)




// let replace = ((array, from, to, elements) => {
//      return  array.splice(from, to - from, ...elements)
// })
// let testArray = [1, 2, 100, 100, 6]
// replace(testArray, 2, 4, [3, 4, 5])
// console.log(testArray)
//





// function copyReplace(array, from, to, elements) {
//     return array.slice(0, from).concat(elements).concat(array.slice(to))
// }
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))



// let copyReplace = ((array, from, to, elements) => {
//     return  [...array.slice(0,from),...elements,...array.slice(to)]
// })
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))
//





// let customerOrder = []
// function recordOrders(time) {
//     customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
// }
// recordOrders(new Date, "coffee", "yaourt", "pizza")
// console.log(customerOrder)


let customerOrder = [];
let  recordOrders = (time, ...birds) =>{
    return customerOrder.push({ time, birds });
}
recordOrders(new Date, "coffee", "yaourt", "pizza");
console.log(customerOrder);