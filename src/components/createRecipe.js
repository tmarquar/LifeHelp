// A page that will allow the user to create a new recipe
import React from 'react';
import RecipeIngredientsList from './recipeIngredientsList';

// create a CreateRecipe component that will allow the user to create a new recipe
// the user will be able to enter the name of the recipe, the ingredients, and the instructions
// the user will be able to save the recipe to the database
// the user will be able to cancel the creation of the recipe and return to the Home page

const CreateRecipe = () => {
    return (
        <div className="createRecipe">
            <h1>Create Recipe</h1>
            <div className="recipeForm">
                <form>
                    <label>Recipe Name</label>
                    <input type="text" name="recipeName" />
                    <RecipeIngredientsList />
                    <label>Instructions</label>
                    <input type="text" name="instructions" />
                    <button>Save</button>
                    <button>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default CreateRecipe;