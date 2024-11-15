import { Button } from "../ui/Button";
import { Container } from "./styles";

import Logo from "/logo.svg";
import Cart from "/icon-cart.svg";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Sobre", url: "/sobre" },
  { name: "Produtos", url: "/produtos" },
  { name: "Perguntas frequentes", url: "/perguntas-frequentes" },
  { name: "Fale conosco", url: "/fale-conosco" },
];

export const Header = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo Dev em Dobro" />
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
      <div>
        <Button>Entrar ou Cadastrar-se</Button>
        <img src={Cart} alt="Ícone do carrinho"/>
      </div>
    </Container>
  );
};
