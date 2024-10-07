
//Define the schema for a recipe
const mongoose = require('mongoose');

// Define the Recipe Schema
const recipeSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true
        
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [{
        name: { type: String, required: true },
        quantity: { type: String, required: true }  
    }],
    instructions: [{
        stepNumber: { type: Number, required: true },
        instruction: { type: String, required: true }
    }],
    
    cookTime: {
        type: String,  
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    category: {
        type: String,  
        required: true
    },
    tags: {
        type: String,
        required: true  
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// Create the Recipe model from the schema
const Recipe= mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;

