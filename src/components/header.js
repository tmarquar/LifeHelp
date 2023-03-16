// Create a basic Header for the page that will allow user to navigate from Home to Settings
// and back to Home
import React from 'react';

// create a Header component that has navigation buttons in a row
// the buttons will be Home, Create Recipe, and Settings
// the buttons will navigate to the appropriate pages when clicked

const Header = () => {
    return (
        <div className="header">
            <h1>Recipe App</h1>
            <div className="navButtons">
                <button>Home</button>
                <button onClick = {() => {window.location.href = '/createRecipe'}}>Create Recipe</button>
                <button>Settings</button>
            </div>
        </div>
    );
}


export default Header;
