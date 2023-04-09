function reverseFunction (str:string){
    let string = '';
    for (let i = str.length; i >=0; i--) {
        string +=str[i]
    }
    return string;
}
let reverse = '1,2,3,4,5,6,7,8,9';
let string = reverseFunction(reverse);
console.log(string);