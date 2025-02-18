import { HeaderContainer } from "./styles";
import { Button } from "@components/ui/Button";

import Logo from "/logo.svg";
import MenuIcon from "/menu-icon.png";
import CloseIcon from "/icon-close.png";
import User from "/icon-user.svg";
import { useContext, useState } from "react";
import { List } from "@components/ui/List";
import { MenuButton } from "@components/ui/MenuButton";
import { CartIconContainer } from "@components/ui/CartIcon";
import { AuthContext } from "Contexts/AuthContext";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Sobre", url: "/sobre" },
  { name: "Produtos", url: "/produtos" },
  { name: "Perguntas frequêntes", url: "/perguntas-frequentes" },
  { name: "Fale conosco", url: "/fale-conosco" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { isAuthenticated } = useContext(AuthContext)

  return (
    <HeaderContainer $isMenuOpen={menuOpen}>
      <div className="header">
        <div className="main">
          <div>
            <div className="hideMenuBtn">
              <MenuButton
                img={MenuIcon}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
            <div>
              <img className="logo" src={Logo} alt="Logo Dev em Dobro" />
            </div>
          </div>
          <nav>
            <List list={menuItems} />
          </nav>

          <aside onClick={() => setMenuOpen(!menuOpen)}>
            <div className="asideHeader">
              <MenuButton img={CloseIcon} />
              <div>
                <img src={Logo} alt="Logo Dev em Dobro" />
              </div>

              {isAuthenticated && <p>Logado</p>}
              {!isAuthenticated && (
                <Button as="a" href="/login">
                  Entrar ou Cadastrar-se
                </Button>
              )}

              <CartIconContainer>
                <p>Carrinho de compras</p>
              </CartIconContainer>
            </div>

            <List list={menuItems} />
          </aside>

          <div>
            {isAuthenticated && <p>Logado</p>}
            {!isAuthenticated && (
              <Button as="a" href="/login">
                <img src={User} alt="Ícone de usuário" />
                <p>Entrar ou Cadastrar-se</p>
              </Button>
            )}

            <CartIconContainer />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};
