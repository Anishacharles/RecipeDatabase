const Recipe = require("../models/recipeModel");

// Create new recipe
exports.createRecipe = async (req, res) => {
    try {
        // Create the new recipe from the request body
        const newRecipe = new Recipe(req.body);
        
        // Save the new recipe to the database
        await newRecipe.save();
        
        // Send back the created recipe
        res.status(201).json(newRecipe);
    } catch (error) {
        // Send a 400 status with both a message and the error
        res.status(400).json({
            message: "Recipe not created",
            error: error.message 
        });
    }
}

//Retrieve all recipes.

exports.getAllRecipes = async (req, res) => {
    try {
       
        const recipes = await Recipe.find() //To get the recipe data
        res.status(201).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "Error fetching the recipes",
            error: error.message 
        });
    }
}

// Get recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching recipe', error: error.message });
    }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        
        res.status(200).json({
            message: 'Recipe updated successfully',
            updatedRecipe: updatedRecipe,
          });
    } catch (error) {
        res.status(400).json({ message: 'Error updating recipe', error: error.message });
    }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting recipe', error: error.message });
    }
};
