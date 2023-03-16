import React from 'react';
import Ingredient from './ingredient';

// A list of ingredients that will be displayed on the Recipe page
// the user can add or remove ingredients from the list
// the user can edit the quantity of each ingredient
// the user can edit the name of each ingredient

const RecipeIngredientsList = () => {
    return (
        <div className="recipeIngredientsList">
            <h1>Ingredients</h1>
            <div className="ingredients">
                <ul>
                    <Ingredient />
                </ul>
            </div>
        </div>
    );
}


export default RecipeIngredientsList;