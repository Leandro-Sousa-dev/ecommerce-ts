import { NavContext } from "Contexts/NavContext"
import { useContext } from "react"

export const useNav = () => {
    return useContext(NavContext)
}