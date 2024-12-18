export interface ButtonProps {
    children: React.ReactNode
    as?: "button" | "a"
    href?: string
    onClick?: () => void
    img?: string
}