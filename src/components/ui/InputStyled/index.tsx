import { InputStyle } from "./styles"
import { forwardRef, InputHTMLAttributes } from "react"

type InputComponentProps = InputHTMLAttributes<HTMLElement>

export const InputStyled = forwardRef<HTMLInputElement, InputComponentProps>(
    ({ name, type = 'text', ...rest }, ref) => {
        return (
            <>
                <InputStyle {...rest} type={type} name={name} ref={ref} />
            </>
        )
    }
)