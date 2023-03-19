// create react router routes for the Home, Create Recipe, Settings, and About pages
import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./screens/home";
import App from "./App";
import CreateRecipe from "./components/createRecipe";
import About from "./screens/about";
import ErrorPage from "./screens/error";

// create a Router component that will contain the routes for the Home, Create Recipe, Settings, and About pages
// the routes will be /, /createRecipe, /settings, and /about
// the routes will render the appropriate components when the user navigates to the route
// the Header component will be rendered on all pages



const MyRouter = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,

            children: [
                {
                    path: "/",
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

