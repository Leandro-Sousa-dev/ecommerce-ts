import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { InputMessage } from "../../components/ui/InputMessage";
import { InputStyled } from "../../components/ui/InputStyled";
import { Container } from "../Home/styles"
import { LoginContainer } from "./styles"
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData {
    email: string
    password: string
    still: boolean
}

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const [checked, setChecked] = useState(false)

    const handleSubmitForm: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <LoginContainer>
                <h2>Minha conta</h2>

                <div className="loginCard">
                    <h3>Entrar</h3>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className="login">
                            <div className="relative">
                                <label>
                                    Nome de usuário ou e-mail
                                    <InputStyled {...register('email', { required: "Campo obrigatório" })} type="text" placeholder="e-mail@email.com" />
                                </label>
                                {errors.email && <InputMessage $color="red">{errors.email.message}</InputMessage>}
                            </div>
                            <div className="relative">
                                <label>
                                    Senha
                                    <InputStyled {...register('password', { required: "Campo obrigatório" })} type="password" placeholder="*********" />
                                </label>
                                {errors.password && <InputMessage $color="red">{errors.password.message}</InputMessage>}
                            </div>

                            <div className="checkbox relative">
                                <label>
                                    <span className={checked ? 'checked' : ''}></span>
                                    <InputStyled {...register('still', { onChange: () => setChecked(!checked) })} type="checkbox" />
                                    Manter conectado
                                </label>
                            </div>

                            <div className="passwordRecovery">
                                <p>Recupere sua senha</p>
                            </div>
                            <div className="submitBtn">
                                <Button>Entrar</Button>

                            </div>
                            <div className="singup">
                                <Link to='/singup'>Criar uma conta</Link>

                            </div>
                        </div>
                    </form>
                </div>
            </LoginContainer>

        </Container >
    )

}