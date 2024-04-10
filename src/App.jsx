import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HomePage from "./Pages/HomePage/HomePage";
import Recipe from "./Pages/Recipe/Recipe"
import Sidebar from "./Components/Sidebar/Sidebar"
import Header from "./Components/Header/Header"
import Form from "./Components/Form/Form";
import AddInventory from "./Components/AddInventory/AddInventory";
import './App.scss'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/myfridge/:place" element={<HomePage />} />
          <Route path="/myfridge" element={<HomePage />} />

          <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
