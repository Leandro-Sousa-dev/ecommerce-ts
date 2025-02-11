export interface InputProps {
    type: string
    name?: string
    placeholder?: string
}

export interface InputButtonProps {
    type: 'button'| 'submit'
    value: string
    onClick?: () => void
}

export interface InputMenssage {
    $color: 'red' | 'green'
    children: React.ReactNode
}