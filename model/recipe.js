const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    name: { type: String , required: true  , unique: true , minlength: 2, maxlength: 100 , trim: true }, //required means that the title field is required and unique means that the title field should be unique in the database (for validation)
    instructions: { type: [String]}, // array of strings
    prepTime: { type: Number , required: true  , unique: true , min: 5, max: 500  },
    difficulty: { type: String , required: true  , enum: ['easy', 'medium', 'hard'] }, //enum is used to validate the difficulty field
},{ timestamps: true }); //timestamps is used to add createdAt and updatedAt fields to the schema   

module.exports = mongoose.model('Recipe', recipeSchema); //exporting the Recipe model so that we can use it in other files