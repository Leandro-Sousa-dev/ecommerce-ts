import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"

export const AdminPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
