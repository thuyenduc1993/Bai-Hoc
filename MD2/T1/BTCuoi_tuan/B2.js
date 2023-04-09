function findMaxSum(arrays) {
    var maxArraySums = [];
    for (var i = 0; i < arrays.length; i++) {
        var currentArraySum = arrays[i].reduce(function (a, b) { return a + b; }, 0);
        maxArraySums.push(currentArraySum);
    }
    return Math.max.apply(Math, maxArraySums);
}
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [7, 8, 9];
var array4 = [10, 11, 12];
var arrays = [array1, array2, array3, array4];
console.log(findMaxSum(arrays));
