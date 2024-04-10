import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Myfridge from "./Pages/Myfridge/Myfridge";
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
      <Header/>
      <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/myfridge/:place" element={<Myfridge />} />
          <Route path="/myfridge" element={<Myfridge />} />
          {/* <Route path="/:name" element={<Myfridge />} /> */}
          <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
