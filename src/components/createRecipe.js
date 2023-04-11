// A page that will allow the user to create a new recipe
import React from 'react';
import RecipeIngredientsList from './recipeIngredientsList';
import CreateInstructions from './createInstructions';

// create a CreateRecipe component that will allow the user to create a new recipe
// the user will be able to enter the name of the recipe, the ingredients, and the instructions
// the user will be able to save the recipe to the database

class CreateRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: 'Example',
            ingredients: [
                {
                    quantity: 1,
                    unit: 'cups',
                    ingredientName: 'potatoes'
                },
                {
                    quantity: 2,
                    unit: 'tbsp',
                    ingredientName: 'salt'
                }
            ],
            instructions: 'Test'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleIngredientChange(e) {
        this.setState({
            instructions: e
        });
    }
    render() {
        return (
            <div className="createRecipe">
                <h1>Create Recipe</h1>
                <div className="recipeForm">
                    <form>
                        <label>Recipe Name</label>
                        <input type="text" name="recipeName" value={this.state.recipeName} onChange={this.handleChange } />
                        {/* pass ingredientList to RecipeIngredientsList */}
                        <RecipeIngredientsList 
                            ingredientList={this.state.ingredients}
                        
                        />
                        <label>Instructions:</label>
                        <CreateInstructions 
                            instructions={this.state.instructions}
                            handleIngredientChange={this.handleIngredientChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            </div>
        );
    }

}
export default CreateRecipe;