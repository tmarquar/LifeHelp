import React from 'react';
import Ingredient from './ingredient';

// A list of ingredients that will be displayed on the Recipe page
// the user can add or remove ingredients from the list
// the user can edit the quantity of each ingredient
// the user can edit the name of each ingredient
class RecipeIngredientsList extends React.Component {
    render() {
        return (
            <div className="recipeIngredientsList">
                <h1>Ingredients</h1>
                <button>Add Ingredient</button>
                <div className="ingredients">
                    <ul>
                        <Ingredient 
                            quantity={this.props.ingredientList[0].quantity}
                            unit={this.props.ingredientList[0].unit}
                            ingredientName={this.props.ingredientList[0].ingredientName}
                        />
                    </ul>

                </div>
            </div>
        );
    }
}


export default RecipeIngredientsList;