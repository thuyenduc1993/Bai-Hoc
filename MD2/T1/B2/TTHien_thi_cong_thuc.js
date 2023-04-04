// let recipe = {
//     'title': 'Sườn xào chua ngọt',
//     'servings': 2,
//     'ingredients': ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']
// }
// console.log( recipe.title);
// console.log(recipe.servings);
// // console.log(recipe.ingredients);
// for (let i = 0; i <recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i])
// }

class Recipe {
    constructor(title,servings,ingredients) {
        this.title =title;
        this.servings = servings;
        this.ingredients = ingredients;
    }
    getTitle(){
        return this.title;
    }
    getServings(){
        return this.servings;
    }
    getIngredients(){
        let ingredientsList = ""
         this.ingredients.forEach((item) => {
            ingredientsList += (`- ${item}`)
        })
        return  ingredientsList
    }
}
let rec = new Recipe('Sườn xào chua ngọt',2,['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']);
// console.log(rec);
console.log(rec.getTitle());
console.log(rec.getServings());
console.log(rec.getIngredients());