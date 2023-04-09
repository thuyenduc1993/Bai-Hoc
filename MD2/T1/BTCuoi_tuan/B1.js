function Arr(arr, n) {
    var result = [];
    for (var i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
var a = [1, 2, 3, 4, 5];
var b = 4;
console.log(Arr(a, 4));
