import './App.css';
// import header
import Header from './components/header';
import MyRoutes from './router';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRecipe from './components/createRecipe';
import About from './screens/about';
import { Link } from 'react-router-dom';

//https://github.com/remix-run/react-router
function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      
    </div>
  );
}


export default App;
