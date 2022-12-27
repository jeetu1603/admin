import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":id" element={<User />} />
            </Route>
            <Route path="newUser" element={<NewUser />} />
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="newProduct" element={<NewProduct />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
