import React from 'react';
import Ingredient from './ingredient';

// A list of ingredients that will be displayed on the Recipe page
// the user can add or remove ingredients from the list
// the user can edit the quantity of each ingredient
// the user can edit the name of each ingredient
class RecipeIngredientsList extends React.Component {
    render() {
        return this.props.ingredientList.map((ingredient) => {
            return (
                <ul key={ingredient}>
                    <Ingredient 
                        quantity={ingredient.quantity}
                        unit={ingredient.unit}
                        ingredientName={ingredient.ingredientName}
                    />
                </ul>
            );
        });
    }
}


export default RecipeIngredientsList;