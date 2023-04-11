import React from 'react';

// An indredient that will be displayed on the Recipe page
// the user can edit the quantity of the ingredient
// the user can edit the name of the ingredient
// the user can delete the ingredient from the list

class Ingredient extends React.Component {
    render() {
        return (
            <div className="ingredient">
                <input type="number" name="quantity" value={this.props.quantity} />
                <select name="unit" value={this.props.unit}>
                    <option value="cups">cups</option>
                    <option value="tbsp">tbsp</option>
                    <option value="tsp">tsp</option>
                    <option value="oz">oz</option>
                    <option value="lb">lb</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="l">l</option>
                </select>
                <input type="text" name="ingredientName" value={this.props.ingredientName} />
                <button>Delete</button>
            </div>
        );
    }
}

export default Ingredient;