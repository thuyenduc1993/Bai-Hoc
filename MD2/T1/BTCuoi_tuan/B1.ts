function Arr(arr: any[], n: number){
    let result: any[][] = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
let a = [1,2,3,4,5];
let b= 4;
console.log(Arr(a,4));

