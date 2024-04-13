import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "./Pages/HomePage/HomePage";
import RecipePage from "./Pages/RecipePage/RecipePage"
import RecipeDetailPage from "./Pages/RecipeDetailPage/RecipeDetailPage";

import Menu from "./Components/Menu/Menu"
import Header from "./Components/Header/Header"
import './App.scss'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header/>
      <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/myfridge/:place" element={<HomePage />} />
          <Route path="/myfridge" element={<HomePage />} />
          <Route path="/recipe/:names" element={<RecipePage />} />
          <Route path="/recipe-detail/:mealId" element={<RecipeDetailPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
