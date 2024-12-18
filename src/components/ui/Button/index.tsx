import { ButtonContainer, ButtonContent } from "./styles"
import { ButtonProps } from "../../../interfaces/ButtonProps"

export const Button = ({
  children,
  as = "button",
  href,
  onClick,
}: ButtonProps) => {

  const img = typeof children == 'object' && Array.isArray(children) && children[0]?.type == 'img'
  
  return (
    <ButtonContainer $imgButton={img}>
      <ButtonContent as={as} href={href} onClick={onClick}>
        {children}
      </ButtonContent>
    </ButtonContainer>
  )
}
