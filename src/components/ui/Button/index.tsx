import React from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps {
  children: React.ReactNode
  as?: "button" | "a"
  href?: string
  onClick?: () => void
}

export const Button = ({
  children,
  as = "button",
  href,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonContainer as={as} href={href} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}
