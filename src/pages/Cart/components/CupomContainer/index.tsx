import { ButtonAlter } from "../../../../components/ui/ButtonAlter"
import { InputStyled } from "../../../../components/ui/InputStyled"
import { Cupom } from "./styles"

export const CupomContainer = () => {
    return (
        <Cupom>
            <label>
                Cupom
                <InputStyled type="text" placeholder="Digite o código" $width="25rem" />
            </label>
            <div>
                <ButtonAlter><p>Aplicar cupom</p></ButtonAlter>

            </div>
        </Cupom>
    )
}