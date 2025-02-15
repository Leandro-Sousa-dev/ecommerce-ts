import { useForm, SubmitHandler } from "react-hook-form"
import { ButtonAlter } from "@components/ui/ButtonAlter"
import { InputStyled } from "@components/ui/InputStyled"
import { Cupom } from "./styles"
import { useState } from "react"
import { InputMessage } from "@components/ui/InputMessage"

interface FormData {
    cupom: string
}

interface onValidateCupomProps {
    onValidateCupom: (c: string) => void
}

const cupons = ['LEANDRO10', 'ECOMERCE20']

export const CupomContainer = ({ onValidateCupom }: onValidateCupomProps) => {
    const { handleSubmit, register, setError, clearErrors, formState: { errors } } = useForm<FormData>()
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmitForm: SubmitHandler<FormData> = (data) => {
        if (data.cupom == '') {
            clearErrors('cupom')
            setSuccessMessage(false)
            onValidateCupom('')
            return
        }

        const validCupom = cupons.includes(data.cupom.toUpperCase())

        if (!validCupom) {
            setSuccessMessage(false)
            onValidateCupom('')
            setError('cupom', { type: 'manual', message: 'Cupom inválido' })
            return
        }

        clearErrors('cupom');
        setSuccessMessage(true)
        onValidateCupom(data.cupom.slice(data.cupom.length - 2));
    }

    return (
        <Cupom onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="relative">
                <label>
                    Cupom
                    <InputStyled {...register('cupom')} type="text" placeholder="Digite o código" />
                </label>
                {errors.cupom && <InputMessage $color="red">{errors.cupom.message}</InputMessage>}
                {successMessage && <InputMessage $color="green">Cupom aplicado</InputMessage>}
            </div>
            <div>
                <ButtonAlter type='submit' value='Aplicar cupom' />
            </div>
        </Cupom>
    )
}