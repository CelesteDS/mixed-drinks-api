DROP DATABASE IF EXISTS mixeddrink;
CREATE DATABASE mixeddrinks;
\c mixeddrinks;
CREATE TABLE ingredients
(
  ingredients_id SERIAL PRIMARY KEY,
  ingredient_name VARCHAR NOT NULL
)
CREATE TABLE cocktails
(
  cocktail_id SERIAL PRIMARY KEY,
  cocktail_name VARCHAR NOT NULL
)
CREATE TABLE cocktails_ingredients
(
  cocktail_id INTEGER REFERENCES cocktails(cocktail_id),
  indgredient_id INTEGER REFERENCES ingredients(indgredient_id)
)
