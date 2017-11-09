const cocktails = require('express').Router();

cocktails.post('/add', (req, res) => {
  const newCocktail = req.body.cocktail_name; // name of cocktail
  const ingredientIds = req.body.ingredient_ids; // array of numerical ids
  let status, message;
  try{
    addCocktail(newCocktail, ingredientIds);
    status = 'success';
    message= 'Cocktail successfully added.';
  } catch (e) {
    status = 'error'
    if(e.code === 418) {
      message = `ingredient_id ${e.message} does not exist in the system. Cocktail not added.`
    } else {
      message = e.message;
    }
  }
  res.send(`{"status": "${status}", "message": "${message}"}`)
});

cocktails.get('/list', (req, res) => {
  res.send(listCocktails());
});


/**
 * listCocktails()
 * no parameters
 * @ returns array of all objects in cocktail table, each with cocktail id & cocktail name
 */

/**
 * addCocktail()
 * @param {string} newCocktail  name of cocktail to add
 * @param {array} ingredientIds array of numerical ids of ingredients in the cocktail
 * (eg. [1, 2, 7])
 * @returns undefined
 */
