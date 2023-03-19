// Create a basic Header for the page that will allow user to navigate from Home to Settings
// and back to Home
import React from 'react';
// import react navigation
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

// create a Header component that has navigation buttons in a row
// the buttons will be Home, Create Recipe, and Settings
// the buttons will navigate to the appropriate pages when clicked

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1>P🥔tato Potat🍅</h1>
                <div className="navButtons">
                    <button>Home</button>
                    <button onClick = {() => {window.location.href = '/createRecipe'}}>Create Recipe</button>
                    <button>Settings</button>
                    <button onClick = {() => {window.location.href = '/about'}}>About</button>
                    <button> <Link to = {`about`}>about2 </Link> </button>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}


export default Header;
