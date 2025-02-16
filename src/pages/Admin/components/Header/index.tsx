import { MenuButton } from "@components/ui/MenuButton"
import MenuIcon from "/menu-icon.png";
import CloseIcon from "/icon-close.png";
import { HeaderContainer } from "./styles";
import { useNav } from "@hooks/useNav";

export const Header = () => {
    const { nav, togglerNav } = useNav()
    return (
        <HeaderContainer $isMenuOpen={nav.active}>
            <div className="header">
                <div className="main">
                    <MenuButton img={MenuIcon} onClick={() => togglerNav(nav.active)} />

                    <aside onClick={() => togglerNav(nav.active)}>
                        <div className="asideHeader">
                            <MenuButton img={CloseIcon} />

                        </div>

                    </aside>
                </div>
            </div>
        </HeaderContainer>

    )
}