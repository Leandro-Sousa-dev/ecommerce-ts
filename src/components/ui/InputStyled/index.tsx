import { useForm } from "react-hook-form"
import { InputProps } from "../../../interfaces/InputProps"
import { InputStyle } from "./styles"

export const InputStyled = (props: InputProps) => {
    const {register} = useForm()

    return (
        <InputStyle {...props}
            {...register(`${props.name}`, {
                required: "Informe um cep válido",
                pattern: {
                    value: /^\d{8}$/,
                    message: "O CEP deve ter exatamente 8 dígitos."
                }
            })}
        />
    )
}