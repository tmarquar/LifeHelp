import React from 'react';

// An indredient that will be displayed on the Recipe page
// the user can edit the quantity of the ingredient
// the user can edit the name of the ingredient
// the user can delete the ingredient from the list

const Ingredient = () => {
    return (
        <div className="ingredient">
            <input type="text" name="quantity" />
            <input type="text" name="ingredientName" />
            <button>Delete</button>
        </div>
    );
}

export default Ingredient;