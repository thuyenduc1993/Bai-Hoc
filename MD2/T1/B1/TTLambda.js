let arr = [1,2,3,4,5,6,7];
let square = (item) => item * item;
function arraySq(func,arr) {
    let newArr = [];
    arr.forEach((alo) => {
        newArr.push(func(alo));
    });
    return  newArr;
}
console.log(arraySq(square, arr));


// let arr = [1,6,7,4,5,6,8];
// function array1(){
//     let array =[];
//     let square = (item) => item * item;
//     for (let i = 0; i < arr.length; i++) {
//         array.push(square(arr[i]));
//     }
//     return array
// }
//
// console.log(array1(arr))



//  let arraySq = (array) => {
//      let array1 = [];
//      let Square = (item) =>item *item;
//      for (let i = 0; i < array.length; i++) {
//          array1.push(Square(array[i]));
//      }
//      return array1;
//  }
// console.log(arraySq(arr))