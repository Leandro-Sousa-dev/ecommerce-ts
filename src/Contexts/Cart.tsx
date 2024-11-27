import { createContext, useState, PropsWithChildren } from "react"

interface CartTypes {
    id: number
    image: string
    title: string
    color: string
    size: string
    price: number
}

interface StateTypes {
    cart: CartTypes[]
    setCart: (cart: CartTypes[]) => void
}

export const CartContext = createContext<StateTypes| null>(null)

export const CartProvider = ( {children}: PropsWithChildren<{}>) =>  {

    const [ cart, setCart] = useState<StateTypes['cart']>([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
