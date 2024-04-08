import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Myfridge from "./Pages/Myfridge/Myfridge";
import Recipe from "./Pages/Recipe/Recipe"
import Sidebar from "./Components/Sidebar/Sidebar"
import Header from "./Components/Header/Header"


function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/myfridge" element={<Myfridge />} />
          <Route path="/myfridge/freezer" element={<Myfridge />} />
          <Route path="/myfridge/fridge" element={<Myfridge />} />
          <Route path="/myfridge/pantry" element={<Myfridge />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
