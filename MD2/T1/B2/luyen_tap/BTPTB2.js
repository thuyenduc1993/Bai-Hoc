class QuadraticEquation{
    a;
    b;
    c;
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant() {
        return this.b * this.b - 4 * this.a *this.c
    }
    getRoot1(){
        return (-this.b + Math.sqrt(this.b * this.b + 4 * this.a * this.c)) / (2 * this.a);
    }
    getRoot2(){
        return (-this.b + Math.sqrt(this.b * this.b - 4 * this.a * this.c)) / (2 * this.a);
    }
}
let index = new QuadraticEquation( 3,8,1);
function delta(index) {
    if (index.getDiscriminant()>0) {
        console.log(`Phương trình có 2 nghiệm ${index.getRoot1()} và ${index.getRoot2()}`);
    }else if (index.getDiscriminant()===0) {
        console.log(`Phương trình có 1 nghiệm ${index.getRoot1()}`);
    }else {
        console.log(`The equation has no roots`);
    }
}
delta(index)


