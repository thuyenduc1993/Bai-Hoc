import {Tiger} from "./Tiger";
import {Chicken} from "./Chicken";
import {Apple} from "./Apple";
import {Orange} from "./Orange"

console.log('---Animals-----')

let animals = [];
animals[0] = Tiger;
animals[1] = Chicken;

animals.forEach((item , index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})

console.log('---Fruits-----')
let fruits = []

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item => {
    console.log(item.howToEat())
})


