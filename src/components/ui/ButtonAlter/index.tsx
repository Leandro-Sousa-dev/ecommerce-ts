import { InputButtonProps } from "../../../interfaces/InputProps"
import { ButtonAlterStyle } from "./styles"

export const ButtonAlter = (props: InputButtonProps) => {
    return (
        <ButtonAlterStyle onClick={props.onClick} type={props.type} value={props.value} />
    )
}