function addIngredient(string) {
  var query = `INSERT INTO ingredients(string)VALUES($1)`
  return db.none(query, [string])
}
addIngredient()


function addCocktail(cocktail) {
  var query = `INSERT INTO cocktails(cocktail_name)VALUES($1)`

  return db.none(query, [cocktail])
}

function createCocktail(string, array) {
  addCocktail(string)
  array.forEach(function (element) {

    return db.none(query, [])
  }, this);
  var query = `INSERT INTO cocktails(cocktail_name)VALUES($1)`

}