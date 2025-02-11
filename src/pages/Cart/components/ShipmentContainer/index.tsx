import { useState } from "react";
import { Button } from "../../../../components/ui/Button";
import { ButtonAlter } from "../../../../components/ui/ButtonAlter";
import { InputStyled } from "../../../../components/ui/InputStyled";
import { Shipment } from "./Styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputMessage } from "../../../../components/ui/InputMessage";

interface ShipmentContainerProps {
    $priceTotal: number
    $cupom?: string
};

interface FormData {
    cep: string
    pais: string
}

interface CountryProps {
    name: string;
    length: number;
}

const countryAndCodes = [{ name: 'brasil', length: 8 }, { name: 'russia', length: 6 }, { name: 'italia', length: 5 }, { name: 'franca', length: 5 }]


export const ShipmentContainer = ({ $priceTotal, $cupom }: ShipmentContainerProps) => {
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm<FormData>()

    const [country, setCountry] = useState<CountryProps>()

    const [isDisabled, setIsDisabled] = useState(true);

    const [freightage, setFerightage] = useState(0)

    const handleZipCode = (countrySelected: string) => {
        const newCountrySelected = countryAndCodes.find((c) => c.name == countrySelected)
        setCountry(newCountrySelected);
        clearErrors('cep')
        setValue('cep', '')
        setIsDisabled(true)

    }

    const handleSubmitForm: SubmitHandler<FormData> = (data) => {
        console.log(data)
        return data
    }

    const gerarZeros = (quantidade: number) => {
        return "0".repeat(quantidade);
    }

    const sumFreightage = (country: CountryProps | undefined) => {
        if (country == undefined) {
            setFerightage(0)
            return
        }

        if (freightage == country.length + 10) return

        setIsDisabled(false);
        setFerightage(country.length + 10)
    }

    return (
        <Shipment onSubmit={handleSubmit(handleSubmitForm)} >
            <div className="container">
                <div className="shipment">
                    <p>Entrega</p>

                    <div>
                        <label>
                            País
                            <select id="pais"
                                {...register('pais', { onChange: (e) => { handleZipCode(e.target.value) } })}>
                                <option value="">Selecione</option>
                                <option value="brasil">Brasil</option>
                                <option value="russia">Russia</option>
                                <option value="italia">Itália</option>
                                <option value="franca">França</option>
                            </select>
                        </label>
                    </div>

                    <div className="relative">
                        <label>
                            CEP
                            <InputStyled {...register('cep', {
                                required: 'Informe um cep válido',
                                minLength: {
                                    value: country?.length ?? 0,
                                    message: country?.length ? `O CEP deve ter ${country.length} dígitos` : 'Selecione o país de destino'
                                },
                                maxLength: {
                                    value: country?.length ?? 0,
                                    message: country?.length ? `O CEP deve ter ${country.length} dígitos` : 'Selecione o país de destino'
                                },
                                onChange: (e) => (e.target.value = e.target.value.replace(/\D/g, ""))
                            }
                            )} type="text" placeholder={country ? gerarZeros(country.length) : 'Selecione o País'} />
                        </label>
                        {errors.cep && <InputMessage $color="red">{errors.cep.message}</InputMessage>}

                    </div>

                    <div>
                        <ButtonAlter onClick={() => sumFreightage(country)} type="button" value="Atualizar entrega" />
                    </div>

                </div>
                <div className="sumPrice">
                    <div>
                        <p>Subtotal dos pedidos:</p>
                        <span>R$ {$priceTotal},00</span>
                    </div>
                    <div>
                        <p>Frete e manuseio:</p>
                        <span>R$ {freightage},00</span>
                    </div>

                    {
                        $cupom ?

                            <div>
                                <p>Cupom:</p>
                                <span>R$ -{$cupom},00</span>
                            </div>
                            : ''
                    }
                    <div>
                        <p>Total:</p>
                        <span>R$ {$priceTotal + freightage - Number($cupom)},00</span>
                    </div>
                </div>
            </div>
            <div className="submitBtn">
                <Button disabled={isDisabled}>Finalizar compra</Button>

            </div>

        </Shipment >
    )

}