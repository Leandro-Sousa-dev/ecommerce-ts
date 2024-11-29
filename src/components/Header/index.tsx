import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Button } from "../ui/Button";

import Logo from "/logo.svg";
import CartImg from "/icon-cart.svg";
import MenuIcon from "/menu-icon.png";
import CloseIcon from "/icon-close.png";
import User from "/icon-user.svg";
import { useState } from "react";
import { List } from "../ui/List";
import { CartContext } from "../../Contexts/CartContext";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Sobre", url: "/sobre" },
  { name: "Produtos", url: "/produtos" },
  { name: "Perguntas frequêntes", url: "/perguntas-frequentes" },
  { name: "Fale conosco", url: "/fale-conosco" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <HeaderContainer isMenuOpen={menuOpen}>
      <div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src={MenuIcon} alt="Ícone de menu" />
        </button>
        <div>
          <img src={Logo} alt="Logo Dev em Dobro" />
        </div>
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <aside>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src={CloseIcon} alt="Ícone de fechar" />
        </button>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </aside>
      {/* <div>
        <Button>Entrar ou Cadastrar-se</Button>
        <a>
          <img src={UserIcon} alt="Ícone de usuário" />
        </a>

        <img src={CartIcon} alt="Ícone do carrinho" />
      </div> */}
    </HeaderContainer>
  );
};
