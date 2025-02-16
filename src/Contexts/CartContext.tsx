import { createContext, useState } from "react";
import { ProductData } from "../interfaces/ProductData";
import { ChildrenProps } from "@interfaces/ChildrenProps";

export interface Products extends ProductData {
  quantity: number;
}

interface CartContextProps {
  cart: Products[];
  addProductIntoCart: (product: ProductData) => void;
  removeProductFromCart: (product: Products) => void;
  productCartIncrement: (product: Products) => void;
  productCartDecrement: (product: Products) => void;
  priceTotal: () => number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextProps);

const products = [
  {
    id: 1,
    image: '/public/purple-shirt-ded.png',
    title: "Camiseta Dev em Dobro",
    color: "roxa",
    size: "M",
    price: 89.0,
    quantity: 1,
  },
  {
    id: 2,
    image: '/public/purple-shirt-ded.png',
    title: "Camiseta Dev em Dobro",
    color: "roxa",
    size: "M",
    price: 89.0,
    quantity: 1,
  },

]
export const CartProvider = ({ children }: ChildrenProps) => {
  // const [cart, setCart] = useState<Products[]>([]);
  const [cart, setCart] = useState<Products[]>(products);

  function addProductIntoCart(product: ProductData): void {
    const productExistentInCart = cart.find(
      (item) => item.title === product.title && item.id === product.id
    );

    if (productExistentInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          const quantity = item.quantity + 1;

          return { ...item, quantity };
        }

        return item;
      });

      setCart(newCart);

      return;
    }

    const newProduct = { ...product, quantity: 1 };
    const newCart = [...cart, newProduct];

    setCart(newCart);
  }

  function removeProductFromCart(product: Products) {
    const newCart = cart.filter(
      (item) => !(item.id === product.id && item.title === product.title)
    );

    setCart(newCart);
  }

  function updateProductQuantity(product: Products, newQuantity: number) {
    if (newQuantity <= 0) return;

    const productExistentInCart = cart.find(
      (item) => item.title === product.title && item.id === product.id
    );

    if (!productExistentInCart) return;

    const newCart = cart.map((item) => {
      if (
        item.id === productExistentInCart.id &&
        item.title === productExistentInCart.title
      ) {
        return { ...item, quantity: newQuantity };
      }

      return item;
    });

    setCart(newCart);
  }

  function productCartIncrement(product: Products) {
    updateProductQuantity(product, product.quantity + 1);
  }

  function productCartDecrement(product: Products) {
    updateProductQuantity(product, product.quantity - 1);
  }

  function priceTotal() {
    return cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addProductIntoCart,
        removeProductFromCart,
        productCartIncrement,
        productCartDecrement,
        priceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
