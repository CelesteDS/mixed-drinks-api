const ingredients = require('express').Router();
const { addIngredient, listIngredients } = require('./queries.js');

ingredients.post('/add', (req, res) => {
  const newIngredient = req.body.ingredient_name;
  try{
    addIngredient(newIngredient);
    res.send('{"status": "success", "message": "Ingredient successfully added."}')
  } catch (e) {
    res.send('{"status": "error", "message": "Something went wrong."}')
  }
});

ingredients.get('/list', (req, res) => {
   res.send(listIngredients());
});
