import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
