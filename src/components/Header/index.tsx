import { Link } from "react-router-dom"
import { HeaderContainer } from "./styles";
import { Button } from "../ui/Button";

import Logo from "/logo.svg";
import Cart from "/icon-cart.svg";
import User from "/icon-user.svg";
import { ChangeEvent, useState } from "react";
import { List } from "../ui/List";

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
    cart: string
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
      cart: 'none',
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
      cart: 'flex',
      height: '18rem',
      justify: 'center',
      align: 'start',
      nav: 'flex',
    },
  }
  
  export const Header = () => {

  const [header, setHeader] = useState(styleHeader.inactive)
  const handleMenu = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked == true ?
      setHeader(styleHeader.active) :
      setHeader(styleHeader.inactive)

  }

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
            <img src={Cart} alt="Ícone do carrinho" />

            <div>
              <span>2</span>
            </div>

            <p>Carrinho de compras</p>
          </Link>

        </div>
      </div>
    </HeaderContainer>
  );
};
