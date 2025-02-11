export interface ButtonProps {
    disabled?: boolean 
    children: React.ReactNode
    as?: "button" | "a"
    href?: string
    onClick?: () => void
    img?: string
}