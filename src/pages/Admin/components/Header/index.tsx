import { MenuButton } from "@components/ui/MenuButton"
import MenuIcon from "/menu-icon.png";
import UserIcon from "/icon-user.svg";
import CloseIcon from "/icon-close.png";
import { HeaderContainer } from "./styles";
import { useNav } from "@hooks/useNav";
import { List } from "@components/ui/List";

const tablesList = [
    { name: 'Produtos', url: '/admin' },
    { name: 'Categorias', url: '/admin' },
    { name: 'Tamanhos', url: '/admin' },
    { name: 'Cores', url: '/admin' },
]


export const Header = () => {
    const { nav, togglerNav } = useNav()
    return (
        <HeaderContainer $isMenuOpen={nav.active}>
            <div className="header">
                <div className="main">
                    <MenuButton img={MenuIcon} onClick={() => togglerNav(nav.active)} />

                    <aside>
                        <div className="asideHeader">
                            <MenuButton img={CloseIcon} onClick={() => togglerNav(nav.active)} />
                        </div>
                        <div>
                            <List list={tablesList} />
                        </div>
                    </aside>

                    <img src={UserIcon} />
                </div>
            </div>
        </HeaderContainer>

    )
}