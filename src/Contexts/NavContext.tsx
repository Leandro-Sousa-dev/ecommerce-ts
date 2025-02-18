import { ChildrenProps } from "@interfaces/ChildrenProps";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NavContext = createContext({} as NavContextProps)

interface ActiveProps {
    active: boolean
}

interface NavContextProps {
    nav: ActiveProps
    togglerNav: (navState: boolean) => void
}

export const NavProvider = ({ children }: ChildrenProps) => {
    const [nav, setNav] = useState<ActiveProps>({} as ActiveProps)

    const checkNavChoice = () => {
        const navChoice = localStorage.getItem("nav")

        if (!navChoice) return localStorage.setItem("nav", JSON.stringify(nav))

        setNav(JSON.parse(navChoice))
    }

    useEffect(() => {
        if (window.matchMedia("(max-width: 640px)").matches) return
        checkNavChoice()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const togglerNav = (navState: boolean) => {

        setNav({ active: !navState })
        localStorage.setItem("nav", JSON.stringify({ active: !navState }))
    }

    return (
        <NavContext.Provider value={{
            nav,
            togglerNav
        }}>
            {children}
        </NavContext.Provider>
    )

}