import { MenuButton } from "@components/ui/MenuButton"
import { useState } from "react";
import MenuIcon from "/menu-icon.png";
import CloseIcon from "/icon-close.png";
import { HeaderContainer } from "./styles";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <HeaderContainer $isMenuOpen={menuOpen}>
            <div className="header">
                <div className="main">
                    <MenuButton img={MenuIcon} onClick={() => setMenuOpen(!menuOpen)} />

                    <aside onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="asideHeader">
                            <MenuButton img={CloseIcon} />

                        </div>

                    </aside>
                </div>
            </div>
        </HeaderContainer>

    )
}