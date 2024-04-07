import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Myfridge from "./Pages/Myfridge/Myfridge";
import Recipe from "./Pages/Recipe/Recipe"



function App() {
  return (
    <div className="App">
      <h1>front end app page</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/myfridge" element={<Myfridge />} />
          <Route path="/recipe:recipeId" element={<Recipe />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
