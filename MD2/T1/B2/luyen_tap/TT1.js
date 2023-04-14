class Recipe {
    title;
    servings;
    ingredients;
    constructor(title, servings, ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients =ingredients;
    }

    getTitle () {
        return this.title;
    }
    getServings() {
        return this.servings;
    }
    getIngredients(){
        let array = '';
      this.ingredients.forEach((item)=>{
          array += `${item}`;
        })
        return array;
        }
    }
let recipe = new Recipe('Sườn xào chua ngọt',2,['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']);
console.log(recipe.getTitle());
console.log(recipe.getServings());
console.log(recipe.getIngredients());