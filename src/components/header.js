// Create a basic Header for the page that will allow user to navigate from Home to Settings
// and back to Home
import React from 'react';
// import react navigation
import { Link } from 'react-router-dom';


// create a Header component that has navigation buttons in a row
// the buttons will be Home, Create Recipe, and Settings
// the buttons will navigate to the appropriate pages when clicked

const Header = () => {
    return (
        <div className="header">
            <h1>P🥔tato Potat🍅</h1>
            <div className="navButtons">
                <button><Link to = {`home`}>Home</Link> </button>
                <button><Link to = {`createRecipe`}>Create Recipe</Link> </button>
                <button>Settings</button>
                <button> <Link to = {`about`}>about </Link> </button>
            </div>
        </div>
    );
}


export default Header;
