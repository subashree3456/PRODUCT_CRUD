import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Portal from "./Components/Portal";
import AddProduct from "./Components/AddProduct";
import Product from "./Components/Product";
import EditProduct from "./Components/EditProduct";
import ProductView from "./Components/ProductView";
import Profile from "./Components/Profile";
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Portal" element={<Portal />}>
          <Route path="Profile" element={<Profile />} />
          <Route path="" element={<Product />} />
          <Route path="Edit/:id" element={<EditProduct />} />
          <Route path="View/:id" element={<ProductView />} />
          <Route path="AddProduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
