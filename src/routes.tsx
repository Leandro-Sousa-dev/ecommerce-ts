import { Routes, Route } from "react-router-dom"

import { MainPage } from "./pages/Client"
import { Home } from "@Client/Home"
import { Cart } from "@Client/Cart"
import { ProductsDetails } from "@Client/Product"
import { Login } from "@Client/LoginSignup/Login"
import { Signup } from "@Client/LoginSignup/Signup"
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
