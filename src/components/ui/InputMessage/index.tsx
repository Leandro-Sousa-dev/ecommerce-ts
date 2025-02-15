import { InputMenssage } from "@interfaces/InputProps"
import { Pstyled } from "./style"

export const InputMessage = (props: InputMenssage) => {
    return (
        <Pstyled $color={props.$color}>{props.children}</Pstyled>
    )
}