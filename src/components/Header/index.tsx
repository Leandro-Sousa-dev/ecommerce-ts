import { Link, useLocation } from "react-router-dom"
import { HeaderContainer } from "./styles";
import { Button } from "../ui/Button";

import Logo from "/logo.svg";
import CartImg from "/icon-cart.svg";
import User from "/icon-user.svg";
import { useContext, useEffect, useState } from "react";
import { List } from "../ui/List";
import { CartContext } from "../../Contexts/Cart";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Sobre", url: "/sobre" },
  { name: "Produtos", url: "/produtos" },
  { name: "Perguntas frequêntes", url: "/perguntas-frequentes" },
  { name: "Fale conosco", url: "/fale-conosco" },
];

export interface Styles {
  backgroundColor: string
  direction: string
  img: string
  button: string
  cartText: string
  height: string
  justify: string
  align: string
  nav: string
}

export interface SH {
  inactive: Styles
  active: Styles
}

const styleHeader: SH = {
  inactive: {
    backgroundColor: '#111111',
    direction: 'row',
    img: 'flex',
    button: 'none',
    cartText: 'none',
    height: '5rem',
    justify: 'space-between',
    align: 'center',
    nav: 'none',
  },
  active: {
    backgroundColor: '#130234',
    direction: 'column',
    img: 'none',
    button: 'flex',
    cartText: 'flex',
    height: '18rem',
    justify: 'center',
    align: 'start',
    nav: 'flex',
  },
}

export const Header = () => {

  const [header, setHeader] = useState(styleHeader.inactive)

  const context = useContext(CartContext)

  const cartContext = context!.cart
  const location = useLocation()

  const handleMenu = () => {
    const body = document.getElementsByTagName('body')[0] as HTMLElement
    const menu = document.getElementById('menuHamburguer') as HTMLInputElement

    if (header == styleHeader.active) {

      menu.checked = false
      body.style.overflow = 'auto'

      setHeader(styleHeader.inactive)
    } else {

      body.style.overflow = 'hidden'

      setHeader(styleHeader.active)

    }
  }

  useEffect(() => {
    if (header == styleHeader.active) handleMenu()

  }, [location])

  return (
    <HeaderContainer theme={header}>
      <div id='content'>
        <div>
          <div id='menu'>
            <input onChange={handleMenu} style={{ display: 'none' }} type="checkbox" id="menuHamburguer" />

            <label htmlFor="menuHamburguer">
              <span></span>
            </label>
          </div>

          <div>
            <img src={Logo} alt="Logo Dev em Dobro" />
          </div>
        </div>

        <nav>
          <List list={menuItems}></List>
        </nav>

        <div>
          <div>
            <a id="imgUser" href="/papaia">
              <img src={User} alt="Entrar ou Cadastrar-se" />
            </a>

            <div id="buttonUser">
              <Button as={'a'} href={'/papaia'}>
                Entrar ou Cadastrar-se
              </Button>
            </div>

          </div>

          <Link to='/cart' id='cartContainer'>
            <img src={CartImg} alt="Ícone do carrinho" />

            <div style={{ display: `${cartContext.length > 0 ? 'flex' : 'none'}` }}>
              <span>{cartContext.length}</span>
            </div>

            <p>Carrinho de compras</p>
          </Link>

        </div>
      </div>
    </HeaderContainer>
  );
};
