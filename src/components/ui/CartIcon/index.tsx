import { useCart } from "@hooks/useCart";
import { CartStyles } from "./styles"
import CartIcon from "/icon-cart.svg";

interface CartProps {
    children?: React.ReactNode
}

export const CartIconContainer = ({ children }: CartProps) => {
    const { cart } = useCart()
    const totalCartItems = cart.reduce((sum, item)=> sum + item.quantity, 0)

    return (
        <CartStyles to='/cart'>
            <img src={CartIcon} alt="Ícone do carrinho" />
            <div style={totalCartItems == 0 ? {display: 'none'} : {display: 'flex'}}>
                <span>{totalCartItems > 99 ? '99+' : totalCartItems}</span>
            </div>
            {children}
        </CartStyles>
    )
}