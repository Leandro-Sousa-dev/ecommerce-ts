import { useForm, SubmitHandler } from "react-hook-form"
import { ButtonAlter } from "../../../../components/ui/ButtonAlter"
import { InputStyled } from "../../../../components/ui/InputStyled"
import { Cupom } from "./styles"


interface FormData {
    cupom: string
}

export const CupomContainer = () => {
    const { handleSubmit, register } = useForm<FormData>()

    const handleSubmitForm: SubmitHandler<FormData> = (data) => {
        console.log(data)
        return data
    }
    return (
        <Cupom onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Cupom
                <InputStyled {...register('cupom')} type="text" placeholder="Digite o código" />
            </label>
            <div>
                <ButtonAlter ><p>Aplicar cupom</p></ButtonAlter>
            </div>
        </Cupom>
    )
}