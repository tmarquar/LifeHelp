// create react router routes for the Home, Create Recipe, Settings, and About pages
//
// import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import the components that will be used in the routes
import CreateRecipe from './components/createRecipe';
import About from './screens/about';

// create a Router component that will contain the routes for the Home, Create Recipe, Settings, and About pages
// the routes will be /, /createRecipe, /settings, and /about
// the routes will render the appropriate components when the user navigates to the route
// the Header component will be rendered on all pages

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/createRecipe" element={<CreateRecipe/>} />
                <Route exact path="/about" element={<About />} />
            </Routes>
      </Router>
    );
}

export default MyRoutes;

