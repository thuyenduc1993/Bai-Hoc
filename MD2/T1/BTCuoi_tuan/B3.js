function reverseFunction(str) {
    var string = '';
    for (var i = str.length; i >= 0; i--) {
        string += str[i];
    }
    return string;
}
var reverse = '1,2,3,4,5,6,7,8,9';
var string = reverseFunction(reverse);
console.log(string);
