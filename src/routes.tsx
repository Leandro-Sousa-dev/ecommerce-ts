import { Routes, Route } from "react-router-dom"

import { MainPage } from "./pages/Main"
import { Home } from "./pages/Home"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products/:id" element={<ProductsDetails />} /> */}
      </Route>
    </Routes>
  )
}
