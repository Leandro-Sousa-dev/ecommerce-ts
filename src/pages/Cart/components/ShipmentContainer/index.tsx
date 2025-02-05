import { useState } from "react";
import { Button } from "../../../../components/ui/Button";
import { ButtonAlter } from "../../../../components/ui/ButtonAlter";
import { InputStyled } from "../../../../components/ui/InputStyled";
import { Shipment } from "./Styles";
import { useForm, SubmitHandler } from "react-hook-form";

interface ShipmentContainerProps {
    $priceTotal: number;
};

interface FormData {
    cep: string
    pais: string
}


export const ShipmentContainer = ({ $priceTotal }: ShipmentContainerProps) => {
    const { register, handleSubmit } = useForm<FormData>()

    const [ freightage ] = useState(0)

    // O correto aqui é receber as informações de

    const handleSubmitForm: SubmitHandler<FormData> = (data) => {
        console.log(data)
        return data
    }
    return (
        <Shipment >
            <div className="container">
                <div className="shipment">
                    <p>Entrega</p>
                    <div>
                        <label>
                            CEP
                            <InputStyled
                                type='text'
                                placeholder='00000-000'
                                {...register('cep', {
                                    required: "Informe um cep válido",
                                    pattern: {
                                        value: /^\d{8}$/,
                                        message: "O CEP deve ter exatamente 8 dígitos."
                                    }
                                })}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            País
                            <select id="pais"
                                {...register('pais')}>
                                <option value="brasil">Brasil</option>
                                <option value="canada">Canadá</option>
                                <option value="italia">Itália</option>
                                <option value="franca">França</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <ButtonAlter>Atualizar entrega</ButtonAlter>
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
                    <div>
                        <p>Total:</p>
                        <span>R$ {$priceTotal + freightage},00</span>
                    </div>
                </div>
            </div>
            <div className="submitBtn">
                <Button onClick={handleSubmit(handleSubmitForm)}>Finalizar compra</Button>

            </div>

        </Shipment >
    )

}