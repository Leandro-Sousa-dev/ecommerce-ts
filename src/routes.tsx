import { Routes, Route } from "react-router-dom"

import { MainPage } from "./pages/Main"
import { Home } from "./pages/Home"
import { Cart } from "@Client/Cart"
import { ProductsDetails } from "./pages/Product"
import { Login } from "./pages/LoginSignup/Login"
import { Signup } from "./pages/LoginSignup/Signup"
import { AdminPage } from "./pages/Admin"
import { Dashboard } from "@Admin/Dashboard"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Route>
      <Route path="/admin" element={<AdminPage />}>
        <Route path="/admin" element={<Dashboard />} />
         {/* <Route path="" element={< />} /> */}
      </Route>
    </Routes>
  )
}
