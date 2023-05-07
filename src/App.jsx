import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ItemDetailedContainer from "./components/ItemDetailedContainer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
return(
<ShoppingCartProvider>
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path= "/" element={<ItemListContainer />} />
        <Route exact path= "/cart" element={<Cart />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailedContainer />} />
      </Routes>
  </BrowserRouter>
</ShoppingCartProvider>
  )
};

export default App; 