import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import AllProducts from "./pages/AllProducts";
import { RegisterProduct } from "./pages/RegisterProduct";
import DeleteProduct from "./pages/DeleteProduct";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="/registerProduct" element={<RegisterProduct />} />
        <Route path="/deleteProduct" element={<DeleteProduct />} />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <LoginModal />
    </Provider>
  );
}

export default App;
