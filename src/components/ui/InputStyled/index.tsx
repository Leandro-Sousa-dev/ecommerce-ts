import { InputProps } from "../../../interfaces/InputProps"
import { InputStyle } from "./styles"

export const InputStyled = (props : InputProps)=> {
    
    return (
        <InputStyle $width={props.$width} type={props.type} placeholder={props.placeholder ?? ''} />
    )
}