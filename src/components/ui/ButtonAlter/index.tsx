import { ButtonProps } from "../../../interfaces/ButtonProps"
import { ButtonStyle } from "./styles"

export const ButtonAlter = ({children}: ButtonProps)=> {
    return (
        <ButtonStyle>{children}</ButtonStyle>
    )
}