"use strict";


// will have to update VAR
var drink = 'screwdriver' //TEMP VAR!!
var liquor = 'rum'        //TEMP VAR!!
var searchIngredientEl = document.querySelector('#searchIngredient');
var yelpSearch = '';
var recipe = [];
var drinks = [];
var glass = document.createElement('img');
var glassEl = document.querySelector('#glass');
var lists = document.querySelector('#list');
var drinkEl = document.querySelector('#drink')
var liquorEl = document.querySelector('#liquor')
//var history = JSON.parse(localStorage.getItem('history')) || [];
// THis is search by liquor give other drinks
// NO PAT ZONE!!!!!!!!!!!!!!!!!!  ****NOTE**still need to link the 2 other pages*!!
// PAT Im Serious
function getdrink() {
  liquor = liquorEl.value;
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + liquor)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      drinks = json
      console.log(json);

      showDrinks()
    })
}
/* will need a for loop for the array of drink options
for (let i = 0; i < drinkArr.lenght; i++){
   var drinkEl = document.createElement('li');
  drinkEl.setAttribute('class', "?");
  drinkEl.setAttribute('Onclick', 'getRecipe(this)');
  drinkEl.setAttribute('value', drinkArr[i]);
  drinkEl.innerText = drinkArr[i];
 drinks.appendChild(drinkEl);
}

Will also need localStocage to paste to past searches
*/
// From liquor we need an array? Then pick the frist one to add to getRecipe!!!





// Pat Paggi
//this is the search for recipe by name of drink
function getRecipe() {

  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      recipe = json
      showRecipe()
      console.log(recipe);

    })
}
var glassEl = document.querySelector('#glass');
var recipeUl = document.querySelector('#recipe')
// THis is the recipe!! done until getDrinks is up
function showRecipe() {
  //still working on local storage!!!
  recipeUl.innerHTML = " "
  //history.push(JSON.stringify(recipe))
  //localStorage.setItem('history', JSON.stringify(history))

  var ingredients = [recipe.drinks[0].strIngredient1, recipe.drinks[0].strIngredient2, recipe.drinks[0].strIngredient3, recipe.drinks[0].strIngredient4, recipe.drinks[0].strIngredient5, recipe.drinks[0].strIngredient6, recipe.drinks[0].strIngredient7, recipe.drinks[0].strIngredient8, recipe.drinks[0].strIngredient9, recipe.drinks[0].strIngredient10, recipe.drinks[0].strIngredient11, recipe.drinks[0].strIngredient12, recipe.drinks[0].strIngredient13, recipe.drinks[0].strIngredient14, recipe.drinks[0].strIngredient15];
  var measure = [recipe.drinks[0].strMeasure1, recipe.drinks[0].strMeasure2, recipe.drinks[0].strMeasure3, recipe.drinks[0].strMeasure4, recipe.drinks[0].strMeasure5, recipe.drinks[0].strMeasure6, recipe.drinks[0].strMeasure7, recipe.drinks[0].strMeasure8, recipe.drinks[0].strMeasure9, recipe.drinks[0].strMeasure10, recipe.drinks[0].strMeasure11, recipe.drinks[0].strMeasure12, recipe.drinks[0].strMeasure13, recipe.drinks[0].strMeasure14, recipe.drinks[0].strMeasure15];

  // Still need to link to Recipe.Html
  recipeUl.innerHTML = recipe.drinks[0].strDrink
  var direction = document.createElement('li');
  direction.innerHTML = recipe.drinks[0].strInstructions;
  recipeUl.appendChild(direction);
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== null) {
      var recipeEl = document.createElement('li');
      recipeEl.innerHTML = ingredients[i] + " ";
      recipeUl.appendChild(recipeEl);
    }
    if (measure[i] !== null) {
      var spanEl = document.createElement('span');
      spanEl.innerHTML = measure[i];
      recipeEl.appendChild(spanEl);
    }
  }
  glass.src = recipe.drinks[0].strDrinkThumb + "/preview";
  glassEl.appendChild(glass);

}

function showDrinks() {
  lists.innerHTML = " "
  for (let i = 0; i < drinks.drinks.length; i++) {
    var drinkEl = document.createElement('li');
    drinkEl.setAttribute('class', "drinks");
    drinkEl.setAttribute('Onclick', 'search(this)');
    drinkEl.setAttribute('value', drinks.drinks[i].strDrink);
    drinkEl.innerText = drinks.drinks[i].strDrink;
    lists.appendChild(drinkEl);
  }
}
function findLiquor(liquorEl) {
  liquor = liquorEl.value;

  getdrink()
}
function findDrink(drinkEl) {
  drink = drinkEl.value;
  getRecipe()
}


function find(searchIngredientEl) {
  yelpSearch = searchIngredientEl.value;
  getStore()
}


var search = function (value) {
  drink = value.textContent;
  getRecipe()
}

//STILL NEED TO WORK ON YELP !!!!
