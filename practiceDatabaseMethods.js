const mongoose = require("mongoose") //import mongoose
const dotenv = require('dotenv'); // Importing the dotenv library to load environment variables from a .env file
dotenv.config();
const connectToDatabase = require('./dp'); // Importing the connectToDatabase function from the dp.js file
const recipeUtils = require('./recipeUtils');




connectToDatabase() // connect to database


recipeUtils.getRecipeById()