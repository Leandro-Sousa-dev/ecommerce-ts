import { Routes, Route } from "react-router-dom"

import { MainPage } from "./pages/Main"
import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
import { ProductsDetails } from "./pages/Product"
import { Login } from "./pages/Login"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Route>
    </Routes>
  )
}
