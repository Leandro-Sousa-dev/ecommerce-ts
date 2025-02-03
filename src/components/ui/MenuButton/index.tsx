import { MenuButtonStyles } from "./styles"

interface MenuButtonProps {
    img: string
    onClick?: () => void
}
export const MenuButton = ({
    img,
    onClick,
}: MenuButtonProps) => {
    return (
        <MenuButtonStyles onClick={onClick}>
            <img src={img} alt="Ícone de menu" />
        </MenuButtonStyles>

    )
}