function findMaxSum(arrays: number[][]): number {
    let maxArraySums: number[] = [];
    for (let i = 0; i < arrays.length; i++) {
        const currentArraySum: number = arrays[i].reduce((a, b) => a + b, 0);
        maxArraySums.push(currentArraySum);
    }
    return Math.max(...maxArraySums);
}
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let array3: number[] = [7, 8, 9];
let array4: number[] = [10, 11, 12];
let arrays: number[][] = [array1, array2, array3, array4];
console.log(findMaxSum(arrays))