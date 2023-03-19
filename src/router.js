// create react router routes for the Home, Create Recipe, Settings, and About pages
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./screens/home";
import Header from "./components/header";
import CreateRecipe from "./components/createRecipe";
import About from "./screens/about";

// create a Router component that will contain the routes for the Home, Create Recipe, Settings, and About pages
// the routes will be /, /createRecipe, /settings, and /about
// the routes will render the appropriate components when the user navigates to the route
// the Header component will be rendered on all pages



const MyRouter = createBrowserRouter([
        {
            path: "/",
            element: <Header />,

            children: [
                {
                    path: "/home",
                    element: <Home />,
                    
                },
                {
                    path: "/createRecipe",
                    element: <CreateRecipe />,
                },
                {
                    path: "/about",
                    element: <About />,
                },  
            ]
        },
    ],
);

export default MyRouter;

